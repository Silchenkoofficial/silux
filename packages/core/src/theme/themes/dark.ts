import { animation } from '../../tokens/animation';
import { breakpoints } from '../../tokens/breakpoints';
import { colorPalette } from '../../tokens/colors';
import { radii } from '../../tokens/radii';
import { coloredShadows, shadows } from '../../tokens/shadows';
import { componentSpacing, spacing } from '../../tokens/spacing';
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from '../../tokens/typography';
import type { SiluxTheme } from '../createTheme';

export const darkTheme: SiluxTheme = {
  colors: {
    primary: {
      subtle: colorPalette.blue[950],
      muted: colorPalette.blue[900],
      default: colorPalette.blue[400],
      emphasis: colorPalette.blue[300],
      foreground: colorPalette.slate[950],
    },
    secondary: {
      subtle: colorPalette.violet[950],
      muted: colorPalette.violet[900],
      default: colorPalette.violet[400],
      emphasis: colorPalette.violet[300],
      foreground: colorPalette.slate[950],
    },
    success: {
      subtle: colorPalette.green[950],
      muted: colorPalette.green[900],
      default: colorPalette.green[400],
      emphasis: colorPalette.green[300],
      foreground: colorPalette.slate[950],
    },
    warning: {
      subtle: colorPalette.yellow[950],
      muted: colorPalette.yellow[900],
      default: colorPalette.yellow[400],
      emphasis: colorPalette.yellow[300],
      foreground: colorPalette.yellow[950],
    },
    danger: {
      subtle: colorPalette.red[950],
      muted: colorPalette.red[900],
      default: colorPalette.red[400],
      emphasis: colorPalette.red[300],
      foreground: colorPalette.slate[950],
    },
    neutral: {
      subtle: colorPalette.slate[900],
      muted: colorPalette.slate[800],
      default: colorPalette.slate[400],
      emphasis: colorPalette.slate[200],
      foreground: colorPalette.slate[950],
    },
    background: {
      default: colorPalette.slate[950],
      subtle: colorPalette.slate[900],
      muted: colorPalette.slate[800],
      emphasis: colorPalette.slate[700],
      overlay: 'rgba(2, 6, 23, 0.7)',
    },
    border: {
      default: colorPalette.slate[700],
      subtle: colorPalette.slate[800],
      strong: colorPalette.slate[500],
    },
    text: {
      default: colorPalette.slate[50],
      subtle: colorPalette.slate[300],
      muted: colorPalette.slate[500],
      disabled: colorPalette.slate[700],
      inverse: colorPalette.slate[950],
    },
  },
  animation,
  breakpoints,
  radii,
  shadows: {
    base: shadows,
    colored: coloredShadows,
  },
  spacing: {
    scale: spacing,
    component: componentSpacing,
  },
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
  },
};
