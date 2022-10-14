// @TODO: 소소가 디자인 시스템 정의해 주면 전부 변경 예정

const FONT_SIZES_TYPE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

const FONT_SIZES = {
  [FONT_SIZES_TYPE.XS]: 14,
  [FONT_SIZES_TYPE.SM]: 15,
  [FONT_SIZES_TYPE.MD]: 16,
  [FONT_SIZES_TYPE.LG]: 18,
  [FONT_SIZES_TYPE.XL]: 24,
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
  BLOWN: 'blown',
  GRAY_1: 'gray1',
  GRAY_2: 'gray2',
  GRAY_3: 'gray3',
  GRAY_4: 'gray4',
  GRAY_5: 'gray5',
  WHITE: 'white',
  WHITE_GRAY_1: 'white_gray1',
  WHITE_GRAY_2: 'white_gray2',
  BLACK: 'black',
  RED: 'red',
};

const COLORS = {
  [COLORS_TYPE.BLOWN]: '#2D2218',
  [COLORS_TYPE.GRAY_1]: '#D5D3D1',
  [COLORS_TYPE.GRAY_2]: '#ABA7A3',
  [COLORS_TYPE.GRAY_3]: '#817A75',
  [COLORS_TYPE.GRAY_4]: '#615A52',
  [COLORS_TYPE.GRAY_5]: '#4C433B',
  [COLORS_TYPE.WHITE]: '#FFFFFF',
  [COLORS_TYPE.WHITE_GRAY_1]: '#EEEEEE',
  [COLORS_TYPE.WHITE_GRAY_2]: '#D1D1D1',
  [COLORS_TYPE.BLACK]: '#000000',
  [COLORS_TYPE.RED]: '#FF0000',
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
