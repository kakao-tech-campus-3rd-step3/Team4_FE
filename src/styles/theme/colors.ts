export const colorScale = {
  gray0: '#ffffff',
  gray100: '#f7f8f9',
  gray200: '#f3f4f5',
  gray300: '#eeeff1',
  gray400: '#dcdee3',
  gray500: '#d1d3d8',
  gray600: '#b0b3ba',
  gray700: '#868b94',
  gray800: '#555d6d',
  gray900: '#2a3038',
  gray1000: '#1a1c20',

  red0: '#fff6f7',
  red100: '#fee6e8',
  red200: '#fdd3d6',
  red300: '#fcbfc3',
  red400: '#fbabaf',
  red500: '#f9888c',
  red600: '#f8646a',
  red700: '#f64147',
  red800: '#f51d25',
  red900: '#f40000',

  brown0: '#F8F3EC',
  brown100: '#F6EAD7',
  brown200: '#E3D1B5',
  brown300: '#D5B990',
  brown400: '#CEBDA2',
  brown500: '#B98B46',
  brown600: '#946F38',
  brown700: '#6F532A',
  brown800: '#4A381C',
  brown900: '#251C0E',

  orange0: '#FFF6E5',
  orange100: '#FFEECC',
  orange200: '#FFDD99',
  orange300: '#FFCC66',
  orange400: '#FFBB33',
  orange500: '#FFAA00',
  orange600: '#CC8800',
  orange700: '#996600',
  orange800: '#664400',
  orange900: '#332200',
} as const;

export const semanticColors = {
  background: {
    default: colorScale.gray0,
    disabled: colorScale.gray200,
    fill: colorScale.gray100,
  },

  brand: {
    background: colorScale.orange0,
    primary: colorScale.brown100, // 강조된 박스(일기 입력 칸, 피드백 말풍선 등)
    border: colorScale.brown400,
  },

  button: {
    default: colorScale.brown100,
    hover: colorScale.brown200,
    border: colorScale.brown400,
  },

  text: {
    default: colorScale.gray1000,
    disabled: colorScale.gray800,
  },

  critical: {
    default: colorScale.red700,
    background: colorScale.red100,
  },
} as const;
