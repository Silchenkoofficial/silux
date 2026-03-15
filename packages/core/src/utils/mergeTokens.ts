export function mergeTokens<T extends object>(base: T, override: Partial<T>): T {
  const result = { ...base } as Record<string, unknown>;

  for (const key in override) {
    const overrideVal = override[key];
    const baseVal = result[key];

    if (
      overrideVal !== null &&
      typeof overrideVal === 'object' &&
      !Array.isArray(overrideVal) &&
      baseVal !== null &&
      typeof baseVal === 'object' &&
      !Array.isArray(baseVal)
    ) {
      result[key] = mergeTokens(baseVal as object, overrideVal as Partial<typeof baseVal>);
    } else if (overrideVal !== undefined) {
      result[key] = overrideVal;
    }
  }

  return result as T;
}
