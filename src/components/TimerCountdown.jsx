import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { TimerContext } from "../context/ContextProvider";

const TimerCountdown = ({ keyP = 1, timer = 15, animate = true, children }) => {
  const { stopTimer } = useContext(TimerContext);

  return (
    <CountdownCircleTimer
      key={keyP}
      isPlaying={animate}
      duration={timer * 60}
      colors={["#fe6f6b", 0.33]}
      strokeWidth={6}
      trailColor="#151932"
      trailStrokeWidth={6}
      onComplete={() => {
        stopTimer();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default TimerCountdown;
