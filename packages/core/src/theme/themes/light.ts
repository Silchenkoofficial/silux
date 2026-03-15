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

export const lightTheme: SiluxTheme = {
  colors: {
    primary: {
      subtle: colorPalette.blue[50],
      muted: colorPalette.blue[100],
      default: colorPalette.blue[500],
      emphasis: colorPalette.blue[700],
      foreground: '#ffffff',
    },
    secondary: {
      subtle: colorPalette.violet[50],
      muted: colorPalette.violet[100],
      default: colorPalette.violet[500],
      emphasis: colorPalette.violet[700],
      foreground: '#ffffff',
    },
    success: {
      subtle: colorPalette.green[50],
      muted: colorPalette.green[100],
      default: colorPalette.green[500],
      emphasis: colorPalette.green[700],
      foreground: '#ffffff',
    },
    warning: {
      subtle: colorPalette.yellow[50],
      muted: colorPalette.yellow[100],
      default: colorPalette.yellow[500],
      emphasis: colorPalette.yellow[700],
      foreground: colorPalette.yellow[900],
    },
    danger: {
      subtle: colorPalette.red[50],
      muted: colorPalette.red[100],
      default: colorPalette.red[500],
      emphasis: colorPalette.red[700],
      foreground: '#ffffff',
    },
    neutral: {
      subtle: colorPalette.slate[50],
      muted: colorPalette.slate[100],
      default: colorPalette.slate[500],
      emphasis: colorPalette.slate[700],
      foreground: '#ffffff',
    },
    background: {
      default: '#ffffff',
      subtle: colorPalette.slate[50],
      muted: colorPalette.slate[100],
      emphasis: colorPalette.slate[200],
      overlay: 'rgba(15, 23, 42, 0.5)',
    },
    border: {
      default: colorPalette.slate[200],
      subtle: colorPalette.slate[100],
      strong: colorPalette.slate[400],
    },
    text: {
      default: colorPalette.slate[900],
      subtle: colorPalette.slate[600],
      muted: colorPalette.slate[400],
      disabled: colorPalette.slate[300],
      inverse: '#ffffff',
    },
    focusRing: {
      default: colorPalette.blue[500],
      offset: '#ffffff',
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
