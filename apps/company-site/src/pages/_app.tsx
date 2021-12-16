import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to company-site!</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="dark:bg-black h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
