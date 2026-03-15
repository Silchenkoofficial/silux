/**
 * Generates two files into dist/:
 *   - variables.css       — all --silux-* vars on :root (VS Code picks up automatically)
 *   - css-custom-data.json — VS Code CSS custom data with descriptions per variable
 */
import fs from 'fs';
import path from 'path';
import { lightTheme } from '../src/theme/themes/light';
import { darkTheme } from '../src/theme/themes/dark';
import type { SiluxTheme } from '../src/theme/createTheme';

// ─── Flatten ────────────────────────────────────────────────────────────────

function flattenObject(
  obj: Record<string, unknown>,
  prefix = '',
): Record<string, string> {
  return Object.entries(obj).reduce<Record<string, string>>((acc, [key, value]) => {
    const newKey = prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(acc, flattenObject(value as Record<string, unknown>, newKey));
    } else {
      acc[newKey] = String(value);
    }
    return acc;
  }, {});
}

function themeToVars(theme: SiluxTheme): Record<string, string> {
  const flat = flattenObject(theme as unknown as Record<string, unknown>);
  return Object.entries(flat).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[`--silux-${key}`] = value;
    return acc;
  }, {});
}

// ─── Build ───────────────────────────────────────────────────────────────────

const lightVars = themeToVars(lightTheme);
const darkVars = themeToVars(darkTheme);

const allVarNames = Array.from(
  new Set([...Object.keys(lightVars), ...Object.keys(darkVars)]),
).sort();

// ─── variables.css ───────────────────────────────────────────────────────────

const lightEntries = allVarNames
  .map((name) => `  ${name}: ${lightVars[name] ?? ''};`)
  .join('\n');

const darkEntries = allVarNames
  .filter((name) => darkVars[name] !== lightVars[name])
  .map((name) => `  ${name}: ${darkVars[name] ?? ''};`)
  .join('\n');

const variablesCss = `/* ─── Silux CSS Variables ────────────────────────────────────────────────────
   Auto-generated — do not edit manually.
   Import this file once in your app to enable IDE autocomplete for --silux-* vars.
   ─────────────────────────────────────────────────────────────────────────── */

:root {
${lightEntries}
}

[data-silux-theme="dark"] {
${darkEntries}
}
`;

// ─── css-custom-data.json ────────────────────────────────────────────────────

type CSSCustomDataProperty = {
  name: string;
  description: string;
};

type CSSCustomData = {
  version: number;
  properties: CSSCustomDataProperty[];
};

const properties: CSSCustomDataProperty[] = allVarNames.map((name) => {
  const light = lightVars[name] ?? '—';
  const dark = darkVars[name] ?? '—';
  const description =
    dark !== light ? `light: ${light} · dark: ${dark}` : light;

  return { name, description };
});

const customData: CSSCustomData = { version: 1.1, properties };

// ─── Write ───────────────────────────────────────────────────────────────────

const distDir = path.resolve(__dirname, '../dist');
fs.mkdirSync(distDir, { recursive: true });

fs.writeFileSync(path.join(distDir, 'variables.css'), variablesCss, 'utf-8');
fs.writeFileSync(
  path.join(distDir, 'css-custom-data.json'),
  JSON.stringify(customData, null, 2),
  'utf-8',
);

console.log('✓ dist/variables.css');
console.log('✓ dist/css-custom-data.json');
