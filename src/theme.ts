const theme = {
  colors: {
    text: {
      dark: '#2D2D2D',
      light: '#FFFFFF',
    },
    grey: {
      regular: '#D9D9D9',
      light: '#F2F2F2',
    },
    gold: {
      darker: '#977137',
      dark: '#AC8852',
      regular: '#BF9F6E',
      light: '#E0D7C9',
    },
    green: {
      dark: '#28453C'
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    }
  },
  spacing :{
    xxxs: '4px',
    xxs: '8px',
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
    xxxl: '96px',
    xxxxl: '128px',
  },
  borderRadiuses: {
    xs: '4px',
    s: '6px',
    m: '8px',
    l: '12px',
    xl: '16px',
    xxl: '24px',
  },
}

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1025px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopM: `(min-width: ${sizes.laptopM})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default theme;