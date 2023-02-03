import { CSSProp } from 'styled-components';

import {
  FONT_WEIGHTS_TYPE,
  COLORS_TYPE,
  Z_INDEX_LAYER_TYPE,
} from '@constants/Theme';

declare module 'styled-components' {
  declare module 'react' {
    interface Attributes {
      css?: CSSProp | CSSObject;
    }
  }

  export interface DefaultTheme {
    fontWeights: {
      [key in FONT_WEIGHTS_TYPE]: number;
    };

    colors: {
      [key in COLORS_TYPE]: string;
    };

    zIndexLayer: {
      [key in Z_INDEX_LAYER_TYPE]: number;
    };
  }
}
