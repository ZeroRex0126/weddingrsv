import Head from "next/head";
import Link from "next/link";
import { Input } from "../components";

const settings = ({ webSiteSetting }) => {
  function LogData() {
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
        <Link href="/">Back to home</Link>
        <button onClick={LogData}>click</button>
        <div className="inputContainer">
          <span>Web Settings</span>
          <Input title="Title" value={webSiteSetting.title} type="text"></Input>
          <span>image input here</span>
          <Input
            title="Invitation Pin"
            value={webSiteSetting.pin}
            type="password"
          ></Input>
          <span>Location</span>
          {/* <Input title="Venue" value={webSiteSetting.title} type="text"></Input> */}
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
            title="Providence"
            value={webSiteSetting.location.providence}
            type="text"
          ></Input>
          <span>Date</span>
          <Input title="Day" value={webSiteSetting.day} type="number"></Input>
          <Input
            title="Month"
            value={webSiteSetting.month}
            type="number"
          ></Input>
          <Input title="Year" value={webSiteSetting.year} type="number"></Input>
        </div>
      </div>
    </div>
  );
};

export default settings;
