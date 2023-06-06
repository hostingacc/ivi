import Layout from "@/components/layout/Layout";
import { userStore } from "@/store/userStore";
import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { useEffect, createContext } from "react";
import { appWithTranslation } from "next-i18next";
import TranslationStore from "../store/translationStore";
import { useRouter } from "next/router";
import nextI18NextConfig from "../next-i18next.config";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });

const theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
});

export const TranslationStoreContext = createContext<TranslationStore | null>(
  null
);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const translationStore = new TranslationStore(router);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      userStore.checkAuth();
    }
  }, []);

  return (
    <TranslationStoreContext.Provider value={translationStore}>
      <ThemeProvider theme={theme}>
        <Layout className={openSans.className}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </TranslationStoreContext.Provider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
