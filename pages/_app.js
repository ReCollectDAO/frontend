import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://www.tezbridge.com/plugin.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
