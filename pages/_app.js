import Head from "next/head";
import Layout from "../components/layout.jsx";
import { useState, useEffect } from "react";
import {
  getRemainingDate,
  getWebSettingData,
  findReservationDataByEmail,
} from "../libs/web-util";
import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/settings.scss";
import "bootstrap/dist/css/bootstrap.css";
// const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
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
  const [remainingTime, setRemainingTime] = useState({});
  const [hasPin, setHasPin] = useState(false);

  async function getWebData() {
    let webSettings = await getWebSettingData();
    setWebSiteSetting(webSettings[0]);
    let date = getRemainingDate(webSettings[0]);
    setRemainingTime(date);
    setLoading(false);
  }

  async function findReservationData(email) {
    "test2@gmail.com";
    let resData = await findReservationDataByEmail(email);
    console.log(resData);
  }

  function validatePin(pin) {
    setHasPin(true);
  }

  function calRemaining() {
    if (webSiteSetting && webSiteSetting != {}) {
      let date = getRemainingDate(webSiteSetting);
      setRemainingTime(date);
    }
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

        <Component
          {...pageProps}
          webSiteSetting={webSiteSetting}
          remainingTime={remainingTime}
          calRemaining={calRemaining}
          hasPin={hasPin}
          validatePin={validatePin}
          findReservationData={findReservationData}
        />
      </Layout>
    </>
  ) : (
    <div>loading</div>
  );
}

export default MyApp;
