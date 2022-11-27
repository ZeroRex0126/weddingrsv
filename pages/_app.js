import Head from "next/head";
import Layout from "../components/layout.jsx";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/index.scss";
// ..Loading Function
// function Loading() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&
//       setTimeout(() => {
//         setLoading(false);
//       }, 5000);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });

//   return (
//     loading && (
//       <div className="spinner-wrapper">
//         <div className="spinner">test</div>
//       </div>
//     )
//   );
// }

const connectionString = `mongodb+srv://sa:FOnND72kohjKqpKm@cluster0.fsqssdi.mongodb.net/Wedding?retryWrites=true&w=majority`;
let client;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [webSiteSetting, setWebSiteSetting] = useState({});

  async function getWebData() {
    const response = await fetch("/api/webdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    setWebSiteSetting(data[0]);
    setLoading(false);
  }
  useEffect(() => {
    getWebData();
  }, []);

  return !loading ? (
    <>
      {/* <Loading /> */}
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Component {...pageProps} webSiteSetting={webSiteSetting} />
      </Layout>
    </>
  ) : (
    <div>loading</div>
  );
}

export default MyApp;
