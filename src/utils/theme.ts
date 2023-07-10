import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    '2xl': '26px',
    '3xl': '28px',
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  colors: {
    primary: {
      100: '#FFCCCD',
      200: '#FF99A6',
      300: '#FF6689',
      400: '#FF3F7F',
      500: '#ff006e',
      600: '#DB0074',
      700: '#B70073',
      800: '#93006C',
      900: '#7A0065',
    },
    secondary: {
      100: '#FFF6FC',
      200: '#FFEEFA',
      300: '#FFE6FA',
      400: '#FFE0FC',
      500: '#ffd6ff',
      600: '#D59CDB',
      700: '#AA6BB7',
      800: '#7F4493',
      900: '#5E297A',
    },
  },
  components: {
    Button: {
      baseStyle: {
        width: '132px',
        borderRadius: '8px',
      },
      sizes: {
        md: {
          width: '132px',
          height: '2.5rem',
          fontSize: '14px',
        },
        lg: {
          fontSize: '16px',
          height: '2.5rem',
          width: '300px',
        },
      },
      variants: {
        outline: {
          border: '2px solid',
        },
      },
      defaultProps: {
        variant: 'solid',
        colorScheme: 'primary',
      },
    },
  },
});
