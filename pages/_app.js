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

  return (
    <div className={`${!doorOpen ? "diableScroll" : ""}`}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <a
          className={`${loading ? "loading" : "completed"} play-btn ${
            doorOpen ? "hide" : ""
          }`}
          onClick={() => {
            if (!loading) {
              setDoorOpen(!doorOpen);
              console.log(doorOpen);
            }
          }}
        >
          {!loading ? (
            <span className="play"></span>
          ) : (
            <div className="spinner-border" role="status"></div>
          )}
        </a>
        <div className="doorContainer">
          <div className={`door left ${doorOpen ? "open" : ""}`}></div>
          <div className={`door right ${doorOpen ? "open" : ""}`}></div>
        </div>
        {!loading ? (
          <Component
            {...pageProps}
            webSiteSetting={webSiteSetting}
            remainingTime={remainingTime}
            calRemaining={calRemaining}
          />
        ) : (
          <></>
        )}
      </Layout>
    </div>
  );
}

export default MyApp;
