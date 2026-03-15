import type { SiluxTheme } from './createTheme';

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

export function generateCSSVariables(theme: SiluxTheme): Record<string, string> {
  const flat = flattenObject(theme as unknown as Record<string, unknown>);
  return Object.entries(flat).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[`--silux-${key}`] = value;
    return acc;
  }, {});
}

export function cssVariablesToString(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
}
