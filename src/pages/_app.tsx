import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraBaseProvider} from '@chakra-ui/react'
import '@fontsource/roboto';
import { theme } from 'src/config/theme'
import 'react-multi-carousel/lib/styles.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18';
import { Client, HydrationProvider} from "react-hydration-provider";


export default function App({ Component, pageProps }: AppProps):JSX.Element {
  return ( <HydrationProvider>
              <I18nextProvider i18n={i18n}>
                  <ChakraBaseProvider theme={theme}>
                    <Client>
                      <Component {...pageProps} />
                    </Client>
                 </ChakraBaseProvider> 
             </I18nextProvider>
        </HydrationProvider>
       
         )
  
}
