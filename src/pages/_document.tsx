import NextDocument, { Html, Main, Head, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta name="author" content="Samuel Rujin" />
          <meta name="title" content="Samuel Rujin's homepage" />
          <meta
            name="description"
            content="Samuel Rujin's personal website"
          />
          <meta name="image" content="https://samuelrujin.com/samuelrujin.jpg" />
          <meta name="url" content="https://samuelrujin.com" />

          <meta name="twitter:title" content="Samuel Rujin's homepage" />
          <meta name="twitter:creator" content="@samuelrujin511" />
          <meta name="twitter:site" content="@samuelrujin511" />
          <meta name="twitter:description" content="@samuelrujin511" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://samuel.com/samuelrujin.jpg"
          />
          <meta name="theme-color" content="#171923" />

          <link
            rel="icon"
            type="image/ico"
            sizes="32x32"
            href="/favicon.ico"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
