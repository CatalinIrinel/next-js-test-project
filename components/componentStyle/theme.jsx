import { extendTheme } from '@chakra-ui/react';
import { boxStyles as FullContainer } from './containerStyles';
export const myTheme = extendTheme({
  colors: {
    primary: '#915a3c',
    lighter: '#cfb79f',
    light: '#e8e6e7',
    secondary: '#4c7972',
    background: '#F8E4D0',
  },
  breakpoints: {
    sm: '40rem', //640px
    md: '48rem', //768px
    lg: '64rem', //1024px
    xl: '80rem', //1280px
    '2xl': '96rem', //1536px
  },
  components: {
    FullContainer,
  },
});
