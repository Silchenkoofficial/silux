import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft';

export type ButtonColorScheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** Stretches button to full container width */
  fullWidth?: boolean;
  /**
   * Merges all button props onto the child element instead of rendering a <button>.
   * Useful for rendering as <a>, <Link>, etc.
   * @example <Button asChild><a href="/page">Go</a></Button>
   */
  asChild?: boolean;
};

// When children is omitted (icon-only button), aria-label becomes required
// so screen readers have something to announce
export type ButtonProps =
  | (ButtonBaseProps & { children: ReactNode; 'aria-label'?: string })
  | (ButtonBaseProps & { children?: never; 'aria-label': string });
