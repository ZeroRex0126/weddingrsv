import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { TimerCard } from "../components";

export default function Home({ calRemaining, webSiteSetting, remainingTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      calRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function LogData() {
    console.log();
  }

  return (
    <div className="container">
      <Head>
        <title>Wedding RSV - Home</title>
        <meta name="description" content="Home page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div
        className="main"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
        }}
      >
        <div>
          <Link href="/settings">to settings</Link>
          <button onClick={LogData}>Log Data</button>
        </div>
        <div className="timer">
          {remainingTime.years > 0 ? (
            <TimerCard title="years" time={remainingTime.years} />
          ) : (
            <></>
          )}
          <TimerCard title="months" time={remainingTime.months} />
          <TimerCard title="days" time={remainingTime.days} />
          <TimerCard title="hours" time={remainingTime.hours} />
          <TimerCard title="minutes" time={remainingTime.minutes} />
          <TimerCard title="seconds" time={remainingTime.seconds} />
        </div>
      </div>
    </div>
  );
}
