import Head from "next/head";
import Layout from "../components/layout.jsx";
import { useState, useEffect } from "react";
import { getWebSettingData } from "../libs/web-util";
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

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [webSiteSetting, setWebSiteSetting] = useState({});

  async function getWebData() {
    let webSettings = await getWebSettingData();
    setWebSiteSetting(webSettings[0]);
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
