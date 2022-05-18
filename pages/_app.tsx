import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Header } from 'components/header'
import { CityProvider } from 'context/city.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CityProvider>
      <Header />
      <Component {...pageProps} />
    </CityProvider>
  )
}

export default MyApp
