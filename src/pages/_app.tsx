import type { AppProps } from 'next/app'
import { CarContextProvider } from '../contexts/CarContext'
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CarContextProvider>
  )
}

export default MyApp;
