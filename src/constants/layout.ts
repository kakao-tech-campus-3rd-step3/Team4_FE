export const DESIGN_BASE = {
  WIDTH: 412,
  HEIGHT: 892,
  MIN_WIDTH: 320,
  MAX_WIDTH: 480,
} as const;

export const DESIGN_RATIO = {
  W: DESIGN_BASE.WIDTH,
  H: DESIGN_BASE.HEIGHT,
} as const;

export const SAFE_FALLBACK = {
  TOP_MIN: 24,
  BOTTOM_MIN: 16,
} as const;

export const PAGE_PADDING = {
  TOP_EXTRA: 8,
  BOTTOM_EXTRA: 8,
  INLINE: 9,
} as const;
