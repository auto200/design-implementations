import Head from "next/head";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalSyle from "styles/GlobalStyle";
import { theme } from "utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Landing Page Agency</title>
        <meta name="description" content="Landing Page Agency" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <GlobalSyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
