import Head from "next/head";
import Link from "next/link";
import { getRemainingDate } from "../libs/web-util";
// import { MongoClient } from "mongodb";

export default function Home(props) {
  function LogData() {
    console.log(props);
    getRemainingDate(props.webSiteSetting);
  }

  return (
    <div className="container">
      <Head>
        <title>Wedding RSV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="main"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
        }}
      >
        <div>
        <Link href="/settings">to settings</Link>
          <button onClick={LogData}>Log Data</button>
        </div>
      </main>
    </div>
  );
}
