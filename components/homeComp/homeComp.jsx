import TimerCard from "../timerCard/timerCard";
import styled from "styled-components";

const HomeCom = styled.div`
  .main {
    background-size: cover;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .timer {
      max-width: 100vw;
      display: flex;
    }
  }
`;
const HomeComp = ({ webSiteSetting, remainingTime }) => {
  return (
    <HomeCom>
      <div
        className="main"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
        }}
        id="home"
      >
        <div>
          <h1>{webSiteSetting.title}</h1>
          <h2>
            {/* {
              new Date(
                webSiteSetting.year,
                webSiteSetting.month,
                webSiteSetting.day
              )
            } */}
            date here
          </h2>
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
    </HomeCom>
  );
};

export default HomeComp;
