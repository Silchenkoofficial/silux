import React, { cloneElement, isValidElement } from 'react';
import { useMergeRefs } from '../../hooks/useMergeRefs';

type AnyProps = Record<string, unknown>;

function mergeProps(slotProps: AnyProps, childProps: AnyProps): AnyProps {
  const merged: AnyProps = { ...childProps };

  for (const key in slotProps) {
    if (key === 'ref') continue; // handled separately via useMergeRefs

    const slotVal = slotProps[key];
    const childVal = childProps[key];

    // Merge event handlers — call both, child first
    if (
      typeof slotVal === 'function' &&
      typeof childVal === 'function' &&
      key.startsWith('on')
    ) {
      merged[key] = (...args: unknown[]) => {
        (childVal as (...a: unknown[]) => void)(...args);
        (slotVal as (...a: unknown[]) => void)(...args);
      };
      continue;
    }

    // Merge className
    if (key === 'className') {
      merged[key] = [slotVal, childVal].filter(Boolean).join(' ');
      continue;
    }

    // Merge style
    if (key === 'style' && typeof slotVal === 'object' && typeof childVal === 'object') {
      merged[key] = { ...(slotVal as object), ...(childVal as object) };
      continue;
    }

    // Slot wins for everything else
    merged[key] = slotVal ?? childVal;
  }

  return merged;
}

export type SlotProps = {
  children: React.ReactNode;
  [key: string]: unknown;
};

/**
 * Slot merges its props onto its single child element.
 * Used to implement the `asChild` pattern — lets consumers render
 * a component as any element while keeping all styles and behaviour.
 *
 * @example
 * <Button asChild>
 *   <a href="/page">Go</a>
 * </Button>
 */
export const Slot = React.forwardRef<unknown, SlotProps>(
  ({ children, ...slotProps }, slotRef) => {
    if (!isValidElement(children)) {
      throw new Error('[Silux] <Slot> requires a single valid React element as children.');
    }

    const childRef = (children as React.ReactElement & { ref?: React.Ref<unknown> }).ref;

    const mergedRef = useMergeRefs(
      slotRef as React.Ref<unknown>,
      childRef as React.Ref<unknown>,
    );

    const mergedProps = mergeProps(slotProps as AnyProps, children.props as AnyProps);

    return cloneElement(
      children as React.ReactElement<AnyProps>,
      { ...mergedProps, ref: mergedRef },
    );
  },
);

Slot.displayName = 'Slot';
