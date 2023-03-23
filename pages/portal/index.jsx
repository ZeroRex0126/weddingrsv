import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Component, useState } from "react";
import Home from "../index";
import PortalHome from "./home";
import SideNav from "./portalComp/sideNav/sideNav";

const portal = ({
  calRemaining,
  webSiteSetting,
  remainingTime,
  pageProps,
  Component,
}) => {
  const [page, setPage] = useState("home");
  function LogData() {
    console.log(date);
    console.log(webSiteSetting);
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
      <SideNav setPage={setPage} page={page} />
      <div className="settingContainer">{show()}</div>
    </div>
  );
};

export default portal;
