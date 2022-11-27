import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
