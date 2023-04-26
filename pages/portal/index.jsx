import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Component, useEffect, useState } from "react";
import Home from "../index";
import PortalHome from "./home";
import SideNav from "./portalComp/sideNav/sideNav";
import { getReservationDatas } from "../../libs/web-util";
import Comment from "./comment";

function useLocalStorageForPageKey(key, fallbackValue) {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? stored : fallbackValue);
  }, [fallbackValue, key]);

  return [value, setValue];
}

const portal = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useLocalStorageForPageKey("page", "home");
  const [reservation, setReservation] = useState();

  async function GetData() {
    let reservation = await getReservationDatas();
    setReservation(reservation);
    if (loading) {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  function LogData() {
    console.log(reservation);
  }

  function setPageStore(key, value) {
    localStorage.setItem(key, value);
    setPage(value);
  }

  function show() {
    switch (page.toLowerCase()) {
      case "home":
        return <PortalHome GetData={GetData} reservation={reservation} />;
      case "comment":
        return <Comment reservation={reservation} />;
      default:
        return <PortalHome reservation={reservation} />;
    }
  }

  return !loading ? (
    <div>
      <Head>
        <title>Portal Management Screen</title>
        <meta name="description" content="Setting Page for the Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <SideNav page={page} setPageStore={setPageStore} />
      <div className="settingContainer">{show()}</div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default portal;
