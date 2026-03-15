import { useEffect } from 'react';
import type { RefObject } from 'react';

type MaybeRef<T extends HTMLElement = HTMLElement> = RefObject<T> | null | undefined;

type UseOutsideClickOptions = {
  // Whether the listener is active
  enabled?: boolean;
  // Refs whose subtree should NOT trigger the handler (e.g. Toasts, other overlays)
  ignore?: Array<MaybeRef>;
};

function containsTarget(refs: Array<MaybeRef>, target: EventTarget | null): boolean {
  return refs.some((ref) => ref?.current?.contains(target as Node) ?? false);
}

// useEffect here is necessary — subscribing to document-level pointer events
// cannot be done without a side effect
export function useOutsideClick<T extends HTMLElement>(
  // Accept a single ref or an array (e.g. trigger + panel in Popover)
  refs: MaybeRef<T> | Array<MaybeRef>,
  handler: (event: MouseEvent | TouchEvent) => void,
  { enabled = true, ignore = [] }: UseOutsideClickOptions = {},
): void {
  useEffect(() => {
    if (!enabled) return;

    const watchedRefs = (Array.isArray(refs) ? refs : [refs]) as Array<MaybeRef>;

    const listener = (event: MouseEvent | TouchEvent): void => {
      const target = event.target;

      // Click is inside one of the watched elements — do nothing
      if (containsTarget(watchedRefs, target)) return;

      // Click is inside an ignored element (e.g. Toast) — do nothing
      if (ignore.length > 0 && containsTarget(ignore, target)) return;

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler, enabled, ignore]);
}
