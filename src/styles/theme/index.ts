import { borderRadius } from '@/styles/theme/borderRadius';
import { colorScale, semanticColors } from '@/styles/theme/colors';
import { layout } from '@/styles/theme/layout';
import { spacing } from '@/styles/theme/spacing';
import { typography } from '@/styles/theme/typography';

export const theme = {
  colors: {
    colorScale,
    ...semanticColors,
  },
  typography,
  spacing,
  layout,
  borderRadius,
} as const;

export default theme;
