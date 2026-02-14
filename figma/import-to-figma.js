/**
 * ═══════════════════════════════════════════════════════════════════
 *  CarbonS → Figma Variables API Import Script
 *  
 *  Creates Figma Variables (colors, spacing, radius) directly in
 *  your Figma file using the REST API.
 *
 *  Usage:
 *    1. Get a Figma Personal Access Token:
 *       → Figma Settings → Account → Personal access tokens
 *       → Create token with "File content" read/write scope
 *
 *    2. Get your File Key:
 *       → Open your Figma file
 *       → Copy from URL: figma.com/design/{FILE_KEY}/...
 *
 *    3. Run:
 *       FIGMA_TOKEN=figd_xxx FIGMA_FILE_KEY=xxx node import-to-figma.js
 * ═══════════════════════════════════════════════════════════════════
 */

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_TOKEN || !FILE_KEY) {
  console.error('\n  Missing environment variables.\n');
  console.error('  Usage:');
  console.error('    FIGMA_TOKEN=figd_xxx FIGMA_FILE_KEY=xxx node import-to-figma.js\n');
  console.error('  Get your token: Figma → Settings → Account → Personal access tokens');
  console.error('  Get file key from URL: figma.com/design/{FILE_KEY}/...\n');
  process.exit(1);
}

const API_BASE = 'https://api.figma.com/v1';

// ── Color Definitions ──────────────────────────────────────────────

function hexToFigmaRGBA(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.substring(0, 2), 16) / 255,
    g: parseInt(h.substring(2, 4), 16) / 255,
    b: parseInt(h.substring(4, 6), 16) / 255,
    a: 1,
  };
}

const COLOR_SCALES = {
  'carbon': {
    '50': '#FAFAF8', '100': '#F5F4F0', '200': '#E8E6DF', '300': '#D4D1C7',
    '400': '#B0ACA0', '500': '#8A857A', '600': '#6B665C', '700': '#504C44',
    '800': '#38352F', '900': '#242220', '950': '#1A1917',
  },
  'ember': {
    '50': '#FDF8F3', '100': '#FAEEE1', '200': '#F4DAC1', '300': '#EBC09A',
    '400': '#DFA06E', '500': '#D4854A', '600': '#C06A35', '700': '#A0532C',
    '800': '#7E4228', '900': '#613524', '950': '#3D1F14',
  },
  'sage': {
    '50': '#F6F8F5', '100': '#EAF0E7', '200': '#D5E1D0', '300': '#B3CAA9',
    '400': '#8DAF7E', '500': '#6E9460', '600': '#577A4B', '700': '#45613C',
    '800': '#384E33', '900': '#2E402B', '950': '#1A2518',
  },
  'clay': {
    '50': '#FBF6F5', '100': '#F6EBE8', '200': '#EDD8D3', '300': '#DFBDB4',
    '400': '#CC9A8D', '500': '#B87D6E', '600': '#A26455', '700': '#865145',
    '800': '#6F443B', '900': '#5C3B34', '950': '#321E1A',
  },
  'success': {
    '50': '#F0F9F0', '100': '#DCEFDC', '200': '#BBE0BC', '300': '#8FC991',
    '400': '#5DAD60', '500': '#3D8E40', '600': '#2E7331', '700': '#275B29',
    '800': '#234924', '900': '#1E3C1F',
  },
  'warning': {
    '50': '#FFFBF0', '100': '#FFF3D4', '200': '#FFE4A3', '300': '#FFD06B',
    '400': '#FFBA33', '500': '#E6A009', '600': '#C28104', '700': '#9A6107',
    '800': '#7D4D0E', '900': '#693F12',
  },
  'error': {
    '50': '#FEF5F5', '100': '#FDE8E8', '200': '#FBD0D0', '300': '#F7ADAD',
    '400': '#F07D7D', '500': '#E54D4D', '600': '#D13030', '700': '#B02424',
    '800': '#912222', '900': '#792323',
  },
  'info': {
    '50': '#F5F8FC', '100': '#E6EFF8', '200': '#C8DCF0', '300': '#9EC2E4',
    '400': '#6DA5D5', '500': '#4A8CC2', '600': '#3672A4', '700': '#2D5C85',
    '800': '#294E6F', '900': '#27425D',
  },
};

const SPACING = {
  '0': 0, '0.5': 2, '1': 4, '1.5': 6, '2': 8, '3': 12, '4': 16,
  '5': 20, '6': 24, '8': 32, '10': 40, '12': 48, '16': 64, '20': 80,
  '24': 96, '32': 128, '40': 160, '48': 192,
};

const RADIUS = {
  'none': 0, 'sm': 4, 'md': 8, 'lg': 12, 'xl': 16, '2xl': 20, '3xl': 24, 'full': 9999,
};

// ── Semantic Aliases (Light → Dark mode mappings) ──────────────────

const SEMANTIC_LIGHT = {
  'bg/primary':      'carbon/50',   'bg/secondary':    'carbon/100',
  'bg/tertiary':     'carbon/200',  'bg/inverse':      'carbon/900',
  'bg/brand':        'ember/500',   'bg/brand-subtle': 'ember/50',
  'fg/primary':      'carbon/900',  'fg/secondary':    'carbon/600',
  'fg/tertiary':     'carbon/400',  'fg/inverse':      'carbon/50',
  'fg/brand':        'ember/600',   'fg/link':         'ember/600',
  'border/primary':  'carbon/200',  'border/secondary':'carbon/300',
  'border/focus':    'ember/500',
  'interactive/primary':       'ember/500',
  'interactive/primary-hover': 'ember/600',
  'interactive/primary-active':'ember/700',
  'interactive/secondary':       'sage/500',
  'interactive/secondary-hover': 'sage/600',
};

const SEMANTIC_DARK = {
  'bg/primary':      'carbon/950',  'bg/secondary':    'carbon/900',
  'bg/tertiary':     'carbon/800',  'bg/inverse':      'carbon/100',
  'bg/brand':        'ember/600',   'bg/brand-subtle': 'ember/950',
  'fg/primary':      'carbon/100',  'fg/secondary':    'carbon/400',
  'fg/tertiary':     'carbon/500',  'fg/inverse':      'carbon/900',
  'fg/brand':        'ember/400',   'fg/link':         'ember/400',
  'border/primary':  'carbon/800',  'border/secondary':'carbon/700',
  'border/focus':    'ember/400',
  'interactive/primary':       'ember/500',
  'interactive/primary-hover': 'ember/400',
  'interactive/primary-active':'ember/300',
  'interactive/secondary':       'sage/500',
  'interactive/secondary-hover': 'sage/400',
};

// ── API Helpers ─────────────────────────────────────────────────────

async function figmaFetch(path, method = 'GET', body = null) {
  const opts = {
    method,
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
      'Content-Type': 'application/json',
    },
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE}${path}`, opts);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API ${res.status}: ${text}`);
  }
  return res.json();
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log('\n  CarbonS → Figma Variables Import');
  console.log('  ─────────────────────────────────\n');

  // Step 1: Get existing variable collections
  console.log('  [1/4] Reading existing variables...');
  let existing;
  try {
    existing = await figmaFetch(`/files/${FILE_KEY}/variables/local`);
  } catch (e) {
    console.error(`  Error: ${e.message}`);
    console.error('  Make sure your token has Variables read/write scope.\n');
    process.exit(1);
  }

  // Step 2: Build the variable creation payload
  console.log('  [2/4] Building variable definitions...');

  const variableCollections = [];
  const variables = [];
  const variableModes = [];

  // --- Collection: Primitives (colors) ---
  const primitivesId = 'coll_primitives';
  const primitiveModeId = 'mode_primitive_default';
  variableCollections.push({
    action: 'CREATE',
    id: primitivesId,
    name: 'CarbonS/Primitives',
    initialModeId: primitiveModeId,
  });
  variableModes.push({
    action: 'UPDATE',
    id: primitiveModeId,
    name: 'Default',
    variableCollectionId: primitivesId,
  });

  let colorCount = 0;
  for (const [scaleName, scale] of Object.entries(COLOR_SCALES)) {
    for (const [step, hex] of Object.entries(scale)) {
      variables.push({
        action: 'CREATE',
        id: `var_${scaleName}_${step}`,
        name: `${scaleName}/${step}`,
        variableCollectionId: primitivesId,
        resolvedType: 'COLOR',
        valuesByMode: {
          [primitiveModeId]: hexToFigmaRGBA(hex),
        },
      });
      colorCount++;
    }
  }

  // --- Collection: Semantic (with Light + Dark modes) ---
  const semanticId = 'coll_semantic';
  const lightModeId = 'mode_light';
  const darkModeId = 'mode_dark';
  variableCollections.push({
    action: 'CREATE',
    id: semanticId,
    name: 'CarbonS/Semantic',
    initialModeId: lightModeId,
  });
  variableModes.push(
    { action: 'UPDATE', id: lightModeId, name: 'Light', variableCollectionId: semanticId },
    { action: 'CREATE', id: darkModeId,  name: 'Dark',  variableCollectionId: semanticId },
  );

  let semanticCount = 0;
  for (const [name, lightRef] of Object.entries(SEMANTIC_LIGHT)) {
    const darkRef = SEMANTIC_DARK[name];
    const [lScale, lStep] = lightRef.split('/');
    const [dScale, dStep] = darkRef.split('/');

    variables.push({
      action: 'CREATE',
      id: `var_sem_${name.replace(/\//g, '_')}`,
      name: name,
      variableCollectionId: semanticId,
      resolvedType: 'COLOR',
      valuesByMode: {
        [lightModeId]: { type: 'VARIABLE_ALIAS', id: `var_${lScale}_${lStep}` },
        [darkModeId]:  { type: 'VARIABLE_ALIAS', id: `var_${dScale}_${dStep}` },
      },
    });
    semanticCount++;
  }

  // --- Collection: Spacing ---
  const spacingId = 'coll_spacing';
  const spacingModeId = 'mode_spacing_default';
  variableCollections.push({
    action: 'CREATE',
    id: spacingId,
    name: 'CarbonS/Spacing',
    initialModeId: spacingModeId,
  });
  variableModes.push({
    action: 'UPDATE',
    id: spacingModeId,
    name: 'Default',
    variableCollectionId: spacingId,
  });

  for (const [name, value] of Object.entries(SPACING)) {
    variables.push({
      action: 'CREATE',
      id: `var_space_${name.replace('.', '_')}`,
      name: `space/${name}`,
      variableCollectionId: spacingId,
      resolvedType: 'FLOAT',
      valuesByMode: { [spacingModeId]: value },
    });
  }

  // --- Collection: Radius ---
  const radiusId = 'coll_radius';
  const radiusModeId = 'mode_radius_default';
  variableCollections.push({
    action: 'CREATE',
    id: radiusId,
    name: 'CarbonS/Radius',
    initialModeId: radiusModeId,
  });
  variableModes.push({
    action: 'UPDATE',
    id: radiusModeId,
    name: 'Default',
    variableCollectionId: radiusId,
  });

  for (const [name, value] of Object.entries(RADIUS)) {
    variables.push({
      action: 'CREATE',
      id: `var_radius_${name}`,
      name: `radius/${name}`,
      variableCollectionId: radiusId,
      resolvedType: 'FLOAT',
      valuesByMode: { [radiusModeId]: value },
    });
  }

  // Step 3: Push to Figma
  console.log(`  [3/4] Pushing to Figma...`);
  console.log(`         ${colorCount} primitive colors`);
  console.log(`         ${semanticCount} semantic aliases (Light + Dark)`);
  console.log(`         ${Object.keys(SPACING).length} spacing values`);
  console.log(`         ${Object.keys(RADIUS).length} radius values`);
  console.log(`         ${variables.length} total variables\n`);

  try {
    const result = await figmaFetch(`/files/${FILE_KEY}/variables`, 'POST', {
      variableCollections,
      variableModes,
      variables,
    });

    console.log('  [4/4] Done!\n');
    console.log('  Variables created in your Figma file:');
    console.log('    ✓ CarbonS/Primitives — all color scales');
    console.log('    ✓ CarbonS/Semantic   — Light + Dark mode aliases');
    console.log('    ✓ CarbonS/Spacing    — 8px grid system');
    console.log('    ✓ CarbonS/Radius     — border radius scale\n');
    console.log('  Open your Figma file and check the Variables panel (⌘/Ctrl + Click the diamond icon).\n');
    console.log('  Next steps:');
    console.log('    1. Apply variables to your component library');
    console.log('    2. Toggle Light/Dark mode in the Semantic collection');
    console.log('    3. Create text styles manually referencing the type scale\n');

    if (result.status === 200 || result.meta) {
      console.log(`  API response: Success`);
    }
  } catch (e) {
    console.error(`  Error pushing to Figma: ${e.message}\n`);
    console.error('  Common fixes:');
    console.error('    - Ensure your token has "File content" write scope');
    console.error('    - Ensure you have Editor access to the file');
    console.error('    - If variables already exist, delete them first or modify the script\n');
    process.exit(1);
  }
}

main();
