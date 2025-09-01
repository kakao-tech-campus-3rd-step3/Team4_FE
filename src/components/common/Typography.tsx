import type { ThemeType } from '@/types/emotion';
import styled from '@emotion/styled';
import type { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: VariantKeys;
  color?: ColorKeys;
  as?: HTMLTags;
} & React.HTMLAttributes<HTMLElement>;

type VariantKeys = keyof ThemeType['typography'];
type HTMLTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

export const Typography = ({
  children,
  variant = 'body1Regular',
  color = 'default',
  as = 'p',
  ...rest
}: Props) => {
  return (
    <StyledTypography as={as as ElementType} $variant={variant} $colorKey={color} {...rest}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.p<{
  $variant: VariantKeys;
  $colorKey: ColorKeys;
}>(({ theme, $variant, $colorKey }) => ({
  fontFamily: `'OngleipEoyeonce', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
  ...theme.typography[$variant as keyof typeof theme.typography],
  color: pickColor(theme, $colorKey),
  margin: 0,
}));

type ScaleColorKeys = keyof ThemeType['colors']['colorScale'];
type TextColorKeys = keyof ThemeType['colors']['text'];
type BrandColorKeys = keyof ThemeType['colors']['brand'];

type ColorKeys = ScaleColorKeys | TextColorKeys | BrandColorKeys | 'critical' | 'default';

function pickColor(theme: ThemeType, key: ColorKeys) {
  if (key in theme.colors.colorScale) {
    return theme.colors.colorScale[key as ScaleColorKeys];
  }

  if (key in theme.colors.text) {
    return theme.colors.text[key as TextColorKeys];
  }

  if (key in theme.colors.brand) {
    return theme.colors.brand[key as BrandColorKeys];
  }

  if (key === 'critical') {
    return theme.colors.critical.default;
  }

  return theme.colors.text.default;
}
