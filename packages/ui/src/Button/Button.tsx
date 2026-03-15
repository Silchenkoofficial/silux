import React, { forwardRef } from 'react';
import { Slot, cn } from '@silux/core';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export type { ButtonProps, ButtonColorScheme, ButtonSize, ButtonVariant } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      colorScheme = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      asChild = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      className,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const buttonClassName = cn(
      styles.button,
      styles[size],
      styles[variant],
      styles[colorScheme],
      fullWidth && styles.fullWidth,
      className,
    );

    // asChild — merge all button styles onto child element directly
    if (asChild) {
      return (
        <Slot
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={ref as any}
          aria-disabled={isDisabled || undefined}
          data-loading={loading || undefined}
          onClick={isDisabled ? undefined : onClick}
          className={buttonClassName}
          {...rest}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-loading={loading || undefined}
        onClick={isDisabled ? undefined : onClick}
        className={buttonClassName}
        {...rest}
      >
        {loading && (
          <span className={styles.spinnerOverlay} aria-hidden="true">
            <span className={styles.spinner} />
          </span>
        )}

        <span className={cn(styles.content, loading && styles.contentHidden)}>
          {leftIcon && (
            <span className={styles.iconSlot} aria-hidden="true">
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className={styles.iconSlot} aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
