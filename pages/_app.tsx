import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'


import {Open_Sans} from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic']  })

const theme = createTheme({

  typography: {
      fontFamily: openSans.style.fontFamily,
    },
  });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout className={openSans.className}>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
