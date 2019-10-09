import { mapObjIndexed } from 'ramda';

const mapColorVariationsToColorScale = (array: string[]) => (index: number) =>
  array[index + 2];

const BASE_COLORS = {
  brown: [
    '#B83A18',
    '#D95027',
    '#F77036',
    '#FBB59D',
    '#FFDACC',
    '#FFEFE7',
    '#FFF7F5',
    '#FFFCFB',
  ],
  ctaBlue: [
    '#27349B',
    '#283AC7', // primaryActionColorActive
    '#4B5FFA', // primaryActionColor
    '#A8BAFF', // primaryActionColorInactive
    '#D7E0FD', // primaryActionColorDisabled
    '#EBF0FF', // backgroundActionableActive
    '#F6F6FE', // backgroundActionable
    '#FCFCFE', // backgroundActionableDisabled
  ],
  darkBlue: [
    '#1E4BB3',
    '#326CD8',
    '#458FFF', // logoBlueDarkColor
    '#A2C7FF',
    '#D4E5FF',
    '#E9F2FF',
    '#F6F9FF',
    '#FBFDFF',
  ],
  green: [
    '#3A8D42',
    '#53C158',
    '#72EE78',
    '#BAFCBD',
    '#D5FCD5',
    '#ECFFEC',
    '#F4FFF4',
    '#FBFFFB',
  ],
  grey: [
    '#17294D', // textPrimaryColor
    '#455980', // textSecondaryColor
    '#8090B2', // textLightColor
    '#B1BACC', // textLighterColor
    '#EDEEF1',
    '#F7F8F9',
    '#FAFBFC',
    '#FCFDFE', // backgroundLightGray
  ],
  lightBlue: [
    '#0367A6',
    '#1D8DD2',
    '#5EC1FF', // logoBlueColor
    '#A8DEFF',
    '#D2EEFF',
    '#E8F6FF', // backgroundLightBlueColor
    '#F5FBFF', // backgroundLighterBlueColor
    '#FAFDFF',
  ],
  magenta: [
    '#9E1878',
    '#C936A6',
    '#E85FCC',
    '#F3A9E4',
    '#FBD7F4',
    '#FFEEFF',
    '#FFF8FE',
    '#FFFCFF',
  ],
  orange: [
    '#C26604',
    '#E38016', // textOrangeColor
    '#FFA238',
    '#FFD39F',
    '#FFE8CA',
    '#FFF4E6', // backgroundOrangeColor
    '#FFF9F4',
    '#FFFDFB',
  ],
  pink: [
    '#B31E50',
    '#DA2B65',
    '#F7578C', // logoPinkColor
    '#FBABC6',
    '#FDD7E3',
    '#FFF0F5', // backgroundPinkColor
    '#FFF7F9',
    '#FFFCFD',
  ],
  premiumBlack: [
    '#1C1C1C',
    '#2C2A29',
    '#353231',
    '#656565',
    '#BABABA',
    '#E0E0E0',
    '#F5F5F5',
    '#FBFBFB',
  ],
  premiumPink: [
    '#E74E36',
    '#EA6F5D',
    '#F39182',
    '#FEA99A',
    '#FFD2C7',
    '#FFE2D9',
    '#FFF0EB',
    '#FFF8F5',
  ],
  purple: [
    '#7229B3',
    '#9343D9',
    '#B45EFF',
    '#DAB0FF',
    '#EDD9FF',
    '#F7EEFF',
    '#FBF7FF',
    '#FEFCFF',
  ],
  red: [
    '#B52430',
    '#DB394C', // errorColor
    '#F05B60', // logoRedColor
    '#F7ADAF', // errorColorFaded
    '#FBD6D7',
    '#FDEFF0', // backgroundRedColor
    '#FEF7F8',
    '#FFFCFC',
  ],
  turquoise: [
    '#068E70',
    '#08C79C', // successColor
    '#11FAC7', // logoTurquoiseColor
    '#99FBE6', // successColorFaded
    '#C3FCEF',
    '#E7FDF9', // backgroundTurquoiseColor
    '#F3FEFB',
    '#FAFFFD',
  ],
  white: [
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
  ],
  yellow: [
    '#C38A04',
    '#F0C014', // warningColor
    '#FFD947', // logoYellowColor
    '#FFEB9F', // warningColorFaded
    '#FFF3C2',
    '#FFF8DF', // backgroundYellowColor
    '#FFFCF0',
    '#FFFEF9',
  ],
};

const theme = {
  colors: mapObjIndexed(mapColorVariationsToColorScale, BASE_COLORS),
  texts: {
    size(input: number) {
      switch (input) {
        case -2:
          return 11;
        case -1:
          return 13;
        case 1:
          return 18;
        case 2:
          return 22;
        case 3:
          return 24;
        case 0:
        default:
          return 15;
      }
    },
  },
  spacings: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },
};

export default theme;
