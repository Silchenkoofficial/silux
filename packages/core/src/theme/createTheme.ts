import { mergeTokens } from '../utils/mergeTokens';
import { lightTheme } from './themes/light';
import type { SemanticColors } from '../tokens/colors';

export type SiluxTheme = {
  colors: SemanticColors;
};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function createTheme(overrides: DeepPartial<SiluxTheme> = {}): SiluxTheme {
  return mergeTokens(lightTheme, overrides as Partial<SiluxTheme>);
}
