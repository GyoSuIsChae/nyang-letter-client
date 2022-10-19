// @TODO: 소소가 디자인 시스템 정의해 주면 전부 변경 예정

const FONT_SIZES_TYPE = {
  XS: 'xs',
  SM: 'sm',
} as const;

const FONT_SIZES = {
  [FONT_SIZES_TYPE.XS]: 14,
  [FONT_SIZES_TYPE.SM]: 15,
} as const;

const FONT_WEIGHTS_TYPE = {
  REGULAR: 'regular',
  MEDIUM: 'medium',
  BOLD: 'bold',
} as const;

const FONT_WEIGHTS = {
  [FONT_WEIGHTS_TYPE.REGULAR]: 400,
  [FONT_WEIGHTS_TYPE.MEDIUM]: 500,
  [FONT_WEIGHTS_TYPE.BOLD]: 700,
} as const;

const COLORS_TYPE = {
  BLACK_100: 'black100',
  BLACK_200: 'black200',
};

const COLORS = {
  [COLORS_TYPE.BLACK_100]: '#141515',
  [COLORS_TYPE.BLACK_200]: '#252628',
} as const;

const Z_INDEX_LAYER_TYPE = {
  LEVEL_1: 'level1',
  LEVEL_2: 'level2',
  LEVEL_3: 'level3',
  LEVEL_4: 'level4',
  LEVEL_5: 'level5',
  LEVEL_6: 'level6',
  LEVEL_7: 'level7',
  LEVEL_8: 'level8',
  LEVEL_9: 'level9',
  LEVEL_10: 'level10',
} as const;

const Z_INDEX_LAYER = {
  [Z_INDEX_LAYER_TYPE.LEVEL_1]: -10000,
  [Z_INDEX_LAYER_TYPE.LEVEL_2]: 0,
  [Z_INDEX_LAYER_TYPE.LEVEL_3]: 1,
  [Z_INDEX_LAYER_TYPE.LEVEL_4]: 10,
  [Z_INDEX_LAYER_TYPE.LEVEL_5]: 25,
  [Z_INDEX_LAYER_TYPE.LEVEL_6]: 50,
  [Z_INDEX_LAYER_TYPE.LEVEL_7]: 100,
  [Z_INDEX_LAYER_TYPE.LEVEL_8]: 2500,
  [Z_INDEX_LAYER_TYPE.LEVEL_9]: 5000,
  [Z_INDEX_LAYER_TYPE.LEVEL_10]: 10000,
} as const;

export {
  FONT_SIZES_TYPE,
  FONT_SIZES,
  FONT_WEIGHTS_TYPE,
  FONT_WEIGHTS,
  COLORS_TYPE,
  COLORS,
  Z_INDEX_LAYER_TYPE,
  Z_INDEX_LAYER,
};
