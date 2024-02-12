import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraBaseProvider} from '@chakra-ui/react'
import '@fontsource/roboto';
import { theme } from 'src/config/theme'
import 'react-multi-carousel/lib/styles.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18';
import { Client, HydrationProvider} from "react-hydration-provider";
import Router from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import { store } from 'src/store/store';



NProgress.configure({ showSpinner: false });


export default function App({ Component, pageProps }: AppProps):JSX.Element {
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);

		return () => {
			Router.events.off('routeChangeStart', handleRouteStart);
			Router.events.off('routeChangeComplete', handleRouteDone);
			Router.events.off('routeChangeError', handleRouteDone);
		};
	}, []);

  return ( <HydrationProvider>
	<Provider store={store}>
		  <I18nextProvider i18n={i18n}>
                  <ChakraBaseProvider theme={theme}>
                    <Client>
                      <Component {...pageProps} />
                    </Client>
                 </ChakraBaseProvider> 
             </I18nextProvider>
	</Provider>
            
        </HydrationProvider>
       
         )
  
}
