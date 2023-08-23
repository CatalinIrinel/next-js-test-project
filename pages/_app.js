import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { myTheme } from '../components/componentStyle/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
