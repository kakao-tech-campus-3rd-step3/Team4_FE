import { colors, semanticColors } from "@/styles/theme/colors";
import { typography } from "@/styles/theme/typography";
import { spacing } from "@/styles/theme/spacing";
import { layout } from "@/styles/theme/layout";
import { borderRadius } from "@/styles/theme/borderRadius";

export const theme = {
  colors: {
    ...colors,
    ...semanticColors,
  },
  typography,
  spacing,
  layout,
  borderRadius,
} as const;

export default theme;
