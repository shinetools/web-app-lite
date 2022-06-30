const theme = {
  colors: {
    brown: (input: number) => {
      switch (input) {
        case -2:
          return '#B83A18';
        case -1:
          return '#D95027';
        case 1:
          return '#FBB59D';
        case 2:
          return '#FFDACC';
        case 3:
          return '#FFEBE0';
        case 4:
          return '#FFF3F0';
        case 5:
          return '#FFFCFB';
        case 0:
        default:
          return '#F77036';
      }
    },
    blue: (input: number) => {
      switch (input) {
        case -2:
          return '#0D5ABF';
        case -1:
          return '#0C6CF3';
        case 1:
          return '#A8D4FF';
        case 2:
          return '#D1E8FF';
        case 3:
          return '#E2F0FD';
        case 4:
          return '#F1F7FD';
        case 5:
          return '#FAFDFF';
        case 0:
        default:
          return '#5CA3FF';
      }
    },
    lightBlue: (input: number) => {
      switch (input) {
        case -2:
          return '#1476BD';
        case -1:
          return '#0E91E1';
        case 1:
          return '#A8DEFF';
        case 2:
          return '#D2EEFF';
        case 3:
          return '#E5F5FF';
        case 4:
          return '#F0F9FF';
        case 5:
          return '#FAFDFF';
        case 0:
        default:
          return '#52BCFF';
      }
    },
    green: (input: number) => {
      switch (input) {
        case -2:
          return '#3A8D42';
        case -1:
          return '#48B14E';
        case 1:
          return '#BAFCBD';
        case 2:
          return '#DDFDDD';
        case 3:
          return '#E5FFE7';
        case 4:
          return '#F0FFF0';
        case 5:
          return '#FBFFFB';
        case 0:
        default:
          return '#76ED7C';
      }
    },
    magenta: (input: number) => {
      switch (input) {
        case -2:
          return '#9E1878';
        case -1:
          return '#C936A6';
        case 1:
          return '#F3A9E4';
        case 2:
          return '#FBD7F4';
        case 3:
          return '#FFE5FF';
        case 4:
          return '#FFF0FD';
        case 5:
          return '#FFFCFF';
        case 0:
        default:
          return '#E85FCC';
      }
    },
    orange: (input: number) => {
      switch (input) {
        case -2:
          return '#C26604';
        case -1:
          return '#E38016';
        case 1:
          return '#FFD39F';
        case 2:
          return '#FFEBD1';
        case 3:
          return '#FFF2E0';
        case 4:
          return '#FFF7F0';
        case 5:
          return '#FFFDFB';
        case 0:
        default:
          return '#FFA238';
      }
    },
    pink: (input: number) => {
      switch (input) {
        case -2:
          return '#B21E50';
        case -1:
          return '#DA2B65';
        case 1:
          return '#FBABC6';
        case 2:
          return '#FDD7E3';
        case 3:
          return '#FFE5EE';
        case 4:
          return '#FDF1F5';
        case 5:
          return '#FFFCFD';
        case 0:
        default:
          return '#F7578C';
      }
    },
    purple: (input: number) => {
      switch (input) {
        case -2:
          return '#7229B3';
        case -1:
          return '#9343D9';
        case 1:
          return '#DAB0FF';
        case 2:
          return '#EDD9FF';
        case 3:
          return '#F3E5FF';
        case 4:
          return '#F7F0FF';
        case 5:
          return '#FEFCFF';
        case 0:
        default:
          return '#B45EFF';
      }
    },
    red: (input: number) => {
      switch (input) {
        case -2:
          return '#B52430';
        case -1:
          return '#DB394C';
        case 1:
          return '#F7ADAF';
        case 2:
          return '#FBD6D7';
        case 3:
          return '#FCE4E6';
        case 4:
          return '#FDF1F2';
        case 5:
          return '#FFFCFC';
        case 0:
        default:
          return '#F05B60';
      }
    },
    turquoise: (input: number) => {
      switch (input) {
        case -2:
          return '#068E70';
        case -1:
          return '#07B58E';
        case 1:
          return '#99FBE6';
        case 2:
          return '#D3FDF3';
        case 3:
          return '#E3FDF8';
        case 4:
          return '#ECFDF9';
        case 5:
          return '#FAFFFD';
        case 0:
        default:
          return '#13F0C0';
      }
    },
    yellow: (input: number) => {
      switch (input) {
        case -2:
          return '#B57C08';
        case -1:
          return '#E5B301';
        case 1:
          return '#FFEB9F';
        case 2:
          return '#FFF5CC';
        case 3:
          return '#FFF7DB';
        case 4:
          return '#FFFBEB';
        case 5:
          return '#FFFEF9';
        case 0:
        default:
          return '#FFD947';
      }
    },
    grey: (input: number) => {
      switch (input) {
        case -2:
          return '#17294D';
        case -1:
          return '#455980';
        case 1:
          return '#B1BACC';
        case 2:
          return '#EDEEF1';
        case 3:
          return '#F3F5F6';
        case 4:
          return '#F9FAFB';
        case 5:
          return '#FCFDFE';
        case 0:
        default:
          return '#8090B2';
      }
    },
    premiumPink: (input: number) => {
      switch (input) {
        case -2:
          return '#E74E36';
        case -1:
          return '#EA6F5D';
        case 1:
          return '#FEA99A';
        case 2:
          return '#FFD2C7';
        case 3:
          return '#FFE2D9';
        case 4:
          return '#FFF0EB';
        case 5:
          return '#FFF8F5';
        case 0:
        default:
          return '#F39182';
      }
    },
    white: (input: number) => '#FFF',
  },
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
