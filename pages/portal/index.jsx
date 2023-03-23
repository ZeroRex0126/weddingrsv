import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Component, useEffect, useState } from "react";
import Home from "../index";
import PortalHome from "./home";
import SideNav from "./portalComp/sideNav/sideNav";

function useLocalStorageForPageKey(key, fallbackValue) {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? stored : fallbackValue);
  }, [fallbackValue, key]);

  return [value, setValue];
}

const portal = ({ webSiteSetting }) => {
  const [page, setPage] = useLocalStorageForPageKey("page", "home");
  function LogData() {
    console.log(date);
    console.log(webSiteSetting);
  }

  function setPageStore(key, value) {
    localStorage.setItem(key, value);
    setPage(value);
  }

  function show() {
    switch (page.toLowerCase()) {
      case "home":
        return <PortalHome webSiteSetting={webSiteSetting} />;
      case "break":
        return <>break</>;
      default:
        return <PortalHome webSiteSetting={webSiteSetting} />;
    }
  }

  return (
    <div>
      <Head>
        <title>{webSiteSetting.title} - Portal</title>
        <meta name="description" content="Setting Page for the Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <SideNav page={page} setPageStore={setPageStore} />
      <div className="settingContainer">{show()}</div>
    </div>
  );
};

export default portal;
