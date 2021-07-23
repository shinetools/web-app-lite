import { mapObjIndexed } from "ramda";

const mapColorVariationsToColorScale = (array: string[]) => (index: number) =>
  array[index + 2];

const BASE_COLORS = {
  brown: [
    "#B83A18",
    "#D95027",
    "#F77036",
    "#FBB59D",
    "#FFDACC",
    "#FFEFE7",
    "#FFF7F5",
    "#FFFCFB",
  ],
  ctaBlue: [
    "#27349B",
    "#283AC7",
    "#4B5FFA",
    "#A8BAFF",
    "#D7E0FD",
    "#EBF0FF",
    "#F6F6FE",
    "#FCFCFE",
  ],
  darkBlue: [
    "#1E4BB3",
    "#326CD8",
    "#458FFF",
    "#A2C7FF",
    "#D4E5FF",
    "#E9F2FF",
    "#F6F9FF",
    "#FBFDFF",
  ],
  green: [
    "#3A8D42",
    "#53C158",
    "#72EE78",
    "#BAFCBD",
    "#D5FCD5",
    "#ECFFEC",
    "#F4FFF4",
    "#FBFFFB",
  ],
  grey: [
    "#17294D",
    "#455980",
    "#8090B2",
    "#B1BACC",
    "#EDEEF1",
    "#F7F8F9",
    "#FAFBFC",
    "#FCFDFE",
  ],
  lightBlue: [
    "#0367A6",
    "#1D8DD2",
    "#5EC1FF",
    "#A8DEFF",
    "#D2EEFF",
    "#E8F6FF",
    "#F5FBFF",
    "#FAFDFF",
  ],
  magenta: [
    "#9E1878",
    "#C936A6",
    "#E85FCC",
    "#F3A9E4",
    "#FBD7F4",
    "#FFEEFF",
    "#FFF8FE",
    "#FFFCFF",
  ],
  orange: [
    "#C26604",
    "#E38016",
    "#FFA238",
    "#FFD39F",
    "#FFE8CA",
    "#FFF4E6",
    "#FFF9F4",
    "#FFFDFB",
  ],
  pink: [
    "#B31E50",
    "#DA2B65",
    "#F7578C",
    "#FBABC6",
    "#FDD7E3",
    "#FFF0F5",
    "#FFF7F9",
    "#FFFCFD",
  ],
  premiumBlack: [
    "#1C1C1C",
    "#2C2A29",
    "#353231",
    "#656565",
    "#BABABA",
    "#E0E0E0",
    "#F5F5F5",
    "#FBFBFB",
  ],
  premiumPink: [
    "#E74E36",
    "#EA6F5D",
    "#F39182",
    "#FEA99A",
    "#FFD2C7",
    "#FFE2D9",
    "#FFF0EB",
    "#FFF8F5",
  ],
  purple: [
    "#7229B3",
    "#9343D9",
    "#B45EFF",
    "#DAB0FF",
    "#EDD9FF",
    "#F7EEFF",
    "#FBF7FF",
    "#FEFCFF",
  ],
  red: [
    "#B52430",
    "#DB394C",
    "#F05B60",
    "#F7ADAF",
    "#FBD6D7",
    "#FDEFF0",
    "#FEF7F8",
    "#FFFCFC",
  ],
  turquoise: [
    "#068E70",
    "#08C79C",
    "#11FAC7",
    "#99FBE6",
    "#C3FCEF",
    "#E7FDF9",
    "#F3FEFB",
    "#FAFFFD",
  ],
  white: [
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
  ],
  yellow: [
    "#C38A04",
    "#F0C014",
    "#FFD947",
    "#FFEB9F",
    "#FFF3C2",
    "#FFF8DF",
    "#FFFCF0",
    "#FFFEF9",
  ],
};

const theme = {
  colors: mapObjIndexed(mapColorVariationsToColorScale, BASE_COLORS),
  texts: {
    lineHeight(input: number) {
      switch (input) {
        case -2:
          return 17;
        case -1:
          return 18;
        case 1:
          return 26;
        case 2:
          return 30;
        case 3:
          return 36;
        case 4:
          return 40;
        case 5:
          return 48;
        case 6:
          return 58;
        case 0:
        default:
          return 21;
      }
    },
    size(input: number) {
      switch (input) {
        case -2:
          return 13;
        case -1:
          return 15;
        case 1:
          return 18;
        case 2:
          return 22;
        case 3:
          return 26;
        case 4:
          return 31;
        case 5:
          return 38;
        case 6:
          return 42;
        case 0:
        default:
          return 16;
      }
    },
  },
  spacings: {
    abs2: 2,
    abs4: 4,
    abs8: 8,
    abs16: 16,
    abs24: 24,
    abs32: 32,
    abs40: 40,
    abs48: 48,
    abs64: 64,
  },
};

export default theme;
