import Head from "next/head";
import Layout from "../components/layout.jsx";
import { useState, useEffect } from "react";
import { getRemainingDate, getWebSettingData } from "../libs/web-util";
import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/settings.scss";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  const [doorOpen, setDoorOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [webSiteSetting, setWebSiteSetting] = useState({});
  const [remainingTime, setRemainingTime] = useState({});

  async function getWebData() {
    let webSettings = await getWebSettingData();
    setWebSiteSetting(webSettings[0]);
    let date = getRemainingDate(webSettings[0]);
    setRemainingTime(date);
    setLoading(false);
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
    <div className={`${!doorOpen ? "diableScroll" : ""}`}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <button
          className={`openBtn ${doorOpen ? "hide" : ""}`}
          onClick={() => {
            setDoorOpen(!doorOpen);
            console.log(doorOpen);
          }}
        >
          open
        </button>
        <div className="doorContainer">
          <div className={`door left ${doorOpen ? "open" : ""}`}></div>
          <div className={`door right ${doorOpen ? "open" : ""}`}></div>
        </div>
        <Component
          {...pageProps}
          webSiteSetting={webSiteSetting}
          remainingTime={remainingTime}
          calRemaining={calRemaining}
        />
      </Layout>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default MyApp;
