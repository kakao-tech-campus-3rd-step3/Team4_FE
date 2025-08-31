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
