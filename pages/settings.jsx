import Head from "next/head";
import Link from "next/link";
import { Input } from "../components";

const settings = () => {
  function LogData() {
    console.log('hahaha');
  }
  return (
    <div>
      <Head>
        <title>Wedding RSV - Settings</title>
        <meta name="description" content="Setting Page for the Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="settingContainer">
        Enter
        <Link href="/">Back to home</Link>
        <button onClick={LogData}>click</button>
        <br />
        <Input title='name'></Input>
        <br />
        <Input title='surname'></Input>
      </div>
    </div>
  );
};

export default settings;
