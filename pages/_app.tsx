import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { Box } from '@mui/material';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, ...appProps }: AppProps) { 
  const getContent = () => {
    if ([`/subscribe`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };
  return getContent()
}
