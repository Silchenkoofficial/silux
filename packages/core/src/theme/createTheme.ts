import { mergeTokens } from '../utils/mergeTokens';
import { lightTheme } from './themes/light';
import type { SemanticColors } from '../tokens/colors';
import type { animation } from '../tokens/animation';
import type { breakpoints } from '../tokens/breakpoints';
import type { radii } from '../tokens/radii';
import type { shadows, coloredShadows } from '../tokens/shadows';
import type { spacing, componentSpacing } from '../tokens/spacing';
import type { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings } from '../tokens/typography';

export type SiluxTheme = {
  colors: SemanticColors;
  animation: typeof animation;
  breakpoints: typeof breakpoints;
  radii: typeof radii;
  shadows: {
    base: typeof shadows;
    colored: typeof coloredShadows;
  };
  spacing: {
    scale: typeof spacing;
    component: typeof componentSpacing;
  };
  typography: {
    fontFamilies: typeof fontFamilies;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    lineHeights: typeof lineHeights;
    letterSpacings: typeof letterSpacings;
  };
};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function createTheme(overrides: DeepPartial<SiluxTheme> = {}): SiluxTheme {
  return mergeTokens(lightTheme, overrides as Partial<SiluxTheme>);
}
