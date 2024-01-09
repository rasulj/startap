import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraBaseProvider} from '@chakra-ui/react'
import '@fontsource/roboto';
import { theme } from 'src/config/theme'

export default function App({ Component, pageProps }: AppProps) {
  return  <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider> 
}
