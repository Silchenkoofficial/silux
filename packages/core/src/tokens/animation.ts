export const animation = {
  subtle: {
    duration: {
      instant: '50ms',
      fast: '100ms',
      normal: '150ms',
      slow: '200ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      linear: 'linear',
    },
  },
  expressive: {
    duration: {
      instant: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '400ms',
      xslow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      in: 'cubic-bezier(0.55, 0, 1, 0.45)',
      out: 'cubic-bezier(0, 0.55, 0.45, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },
} as const;

export type AnimationMode = keyof typeof animation;
export type AnimationDuration = keyof (typeof animation)[AnimationMode]['duration'];
export type AnimationEasing = keyof (typeof animation)[AnimationMode]['easing'];
