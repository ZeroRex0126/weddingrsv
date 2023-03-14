import TimerCard from "../timerCard/timerCard";

const HomeComp = ({ webSiteSetting, remainingTime }) => {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
      }}
      id="home"
    >
      <div>
        <h1>{webSiteSetting.title}</h1>
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
  );
};

export default HomeComp;
