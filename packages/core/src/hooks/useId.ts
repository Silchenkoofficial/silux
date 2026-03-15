import { useState } from 'react';

let counter = 0;

function generateId(prefix: string): string {
  counter += 1;
  return `${prefix}-${counter}`;
}

// React 16 compatible — React.useId is available only in React 18+
export function useId(prefix = 'silux'): string {
  const [id] = useState(() => generateId(prefix));
  return id;
}
