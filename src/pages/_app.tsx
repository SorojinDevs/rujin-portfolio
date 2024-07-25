import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Samuel Rujin</title>
        <meta name="og:title" content="Samuel Rujin" />
        <meta
          name="og:description"
          content="Samuel Rujin's personal website"
        />
        <meta
          name="og:image"
          content="https://sergei.com/samuelrujin.jpg"
        />
        <meta name="og:url" content="https://samuelrujin.com" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
