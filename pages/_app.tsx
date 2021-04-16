import React from "react";
import ReactDOM from "react-dom";
import { SSRProvider } from "react-aria";
import { AppProps } from "next/app";

import "../global.css";
import Head from "next/head";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000, {});
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Best Planets Rankings</title>
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}
