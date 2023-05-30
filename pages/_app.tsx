import Layout from '@/components/layout/Layout'
import { userStore } from '@/store/userStore'
import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { useEffect } from 'react'


const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] })

const theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
})



function MyApp({ Component, pageProps,  ...appProps }: AppProps) {




  useEffect(() => {
    if (localStorage.getItem('token')) {
      userStore.checkAuth()
    }
  }, [])

  const getContent = () => {
    if ([`/subscribe`].includes(appProps.router.pathname))
      return <Component {...pageProps} />

    return (

        <ThemeProvider theme={theme}>
          <Layout className={openSans.className}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>

    )
  }
  return getContent()
}

/* export const getServerSideProps = async (appContext) => {
  const genresUrl = 'http://192.168.0.102:3001/movies/filters/genres'  
  const store = initializeStore()
  const genres = await fetch(genresUrl).then(res => res.json())

  store.setGenres(genres)

  return {
    initialMobxState: store,
  }
} */

export default MyApp

