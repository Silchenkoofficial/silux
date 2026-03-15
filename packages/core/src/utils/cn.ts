type ClassValue = string | number | boolean | null | undefined | ClassValue[];

function flatten(value: ClassValue): string[] {
  if (!value && value !== 0) return [];
  if (Array.isArray(value)) return value.flatMap(flatten);
  return [String(value)];
}

export function cn(...classes: ClassValue[]): string {
  return classes.flatMap(flatten).filter(Boolean).join(' ');
}
