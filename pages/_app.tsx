import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'

import { Header } from 'components/header'
import { CityProvider } from 'context/city.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <CityProvider>
        <Header />
        <Component {...pageProps} />
      </CityProvider>
    </ThemeProvider>
  )
}

export default MyApp
