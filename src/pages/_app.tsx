import { CartProvider } from 'hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <CartProvider>
            <Head>
              <title>Audiophile e-commerce</title>
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#06092B" />
              <meta
                name="description"
                content="A project to work with TypeScript, React, NextJS and Styled Components"
              />
            </Head>
            <GlobalStyles />
            <NextNProgress
              color="#d87d4a"
              startPosition={0.3}
              stopDelayMs={200}
              height={4}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </CartProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default App
