import { Html, Head, Main, NextScript } from 'next/document';
import { Box, Container } from '@mui/material';
import Footer from '@/components/footer/footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Container sx={{ maxWidth: '1240px' }}>
            <Main />
            <NextScript />
            <Footer />

        </Container>
      </body>
    </Html>
  );
}
