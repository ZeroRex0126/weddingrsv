import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../components";

const settings = ({ webSiteSetting }) => {
  const [date, setDate] = useState(`${webSiteSetting.year}-${webSiteSetting.month}-${webSiteSetting.day}`);

  function LogData() {
    console.log(date);
    console.log(webSiteSetting);
  }
  return (
    <div>
      <Head>
        <title>{webSiteSetting.title} - Settings</title>
        <meta name="description" content="Setting Page for the Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="settingContainer">
        <div className="inputContainer">
          <span>Web Settings</span>
          <Input title="Title" value={webSiteSetting.title} type="text"></Input>
          <Input title="Date" value={date} type="date"></Input>
          <span>image input here</span>
          <Input
            title="Invitation Pin"
            value={webSiteSetting.pin}
            type="password"
          ></Input>
          <span>Location</span>
          <Input title="Venue" value={webSiteSetting.location.venue} type="text"></Input>
          <Input
            title="Street"
            value={webSiteSetting.location.street}
            type="text"
          ></Input>
          <Input
            title="Suburb"
            value={webSiteSetting.location.suburb}
            type="text"
          ></Input>
          <Input
            title="City"
            value={webSiteSetting.location.city}
            type="text"
          ></Input>
          <Input
            title="Province"
            value={webSiteSetting.location.province}
            type="text"
          ></Input>
          <Input title="Postal/Zip Code" value={webSiteSetting.location.zip} type="text"></Input>
          
        </div>

        <div className="previewContainer">
          <Link href="/">Back to home</Link>
          <button onClick={LogData}>click</button>
        </div>
      </div>
    </div>
  );
};

export default settings;
