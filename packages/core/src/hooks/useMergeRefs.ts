import { useCallback } from 'react';
import type { MutableRefObject, Ref, RefCallback } from 'react';

export function useMergeRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback((node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as MutableRefObject<T | null>).current = node;
      }
    });
  }, refs);
}
