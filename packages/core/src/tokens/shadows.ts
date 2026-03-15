export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Colored shadows reference CSS custom properties so they adapt to any theme
export const coloredShadows = {
  primary: {
    sm: '0 1px 3px 0 var(--silux-color-primary-default), 0 1px 2px -1px var(--silux-color-primary-muted)',
    md: '0 4px 6px -1px var(--silux-color-primary-default), 0 2px 4px -2px var(--silux-color-primary-muted)',
    lg: '0 10px 15px -3px var(--silux-color-primary-default), 0 4px 6px -4px var(--silux-color-primary-muted)',
  },
  secondary: {
    sm: '0 1px 3px 0 var(--silux-color-secondary-default), 0 1px 2px -1px var(--silux-color-secondary-muted)',
    md: '0 4px 6px -1px var(--silux-color-secondary-default), 0 2px 4px -2px var(--silux-color-secondary-muted)',
    lg: '0 10px 15px -3px var(--silux-color-secondary-default), 0 4px 6px -4px var(--silux-color-secondary-muted)',
  },
  success: {
    sm: '0 1px 3px 0 var(--silux-color-success-default), 0 1px 2px -1px var(--silux-color-success-muted)',
    md: '0 4px 6px -1px var(--silux-color-success-default), 0 2px 4px -2px var(--silux-color-success-muted)',
    lg: '0 10px 15px -3px var(--silux-color-success-default), 0 4px 6px -4px var(--silux-color-success-muted)',
  },
  warning: {
    sm: '0 1px 3px 0 var(--silux-color-warning-default), 0 1px 2px -1px var(--silux-color-warning-muted)',
    md: '0 4px 6px -1px var(--silux-color-warning-default), 0 2px 4px -2px var(--silux-color-warning-muted)',
    lg: '0 10px 15px -3px var(--silux-color-warning-default), 0 4px 6px -4px var(--silux-color-warning-muted)',
  },
  danger: {
    sm: '0 1px 3px 0 var(--silux-color-danger-default), 0 1px 2px -1px var(--silux-color-danger-muted)',
    md: '0 4px 6px -1px var(--silux-color-danger-default), 0 2px 4px -2px var(--silux-color-danger-muted)',
    lg: '0 10px 15px -3px var(--silux-color-danger-default), 0 4px 6px -4px var(--silux-color-danger-muted)',
  },
} as const;

export type ShadowKey = keyof typeof shadows;
export type ColoredShadowColor = keyof typeof coloredShadows;
export type ColoredShadowSize = keyof (typeof coloredShadows)[ColoredShadowColor];
