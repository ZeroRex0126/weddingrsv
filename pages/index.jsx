import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  AboutComponent,
  Contact,
  EventsComp,
  Family,
  Gallery,
  HomeComp,
  RSVP,
  StoryComponent,
  TimerCard,
} from "../components";

export default function Home({ calRemaining, webSiteSetting, remainingTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      calRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainContainer">
      <Head>
        <title>{webSiteSetting.title} - Home</title>
        <meta name="description" content="Home page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <HomeComp webSiteSetting={webSiteSetting} remainingTime={remainingTime} />
      <AboutComponent webSiteSetting={webSiteSetting} />
      <StoryComponent webSiteSetting={webSiteSetting} />
      {/* <Gallery webSiteSetting={webSiteSetting} /> */}
      {/* <Family webSiteSetting={webSiteSetting} /> */}
      <EventsComp webSiteSetting={webSiteSetting} />
      <RSVP webSiteSetting={webSiteSetting} />
      {/* <Contact webSiteSetting={webSiteSetting} /> */}
    </div>
  );
}
