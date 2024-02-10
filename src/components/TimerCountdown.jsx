import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const TimerCountdown = ({ key = 1, timer = 15, animate = true, children }) => {
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={["#fe6f6b", 0.33]}
      strokeWidth={6}
      trailColor="#151932"
      trailStrokeWidth={6}
      onComplete={() => {
        //stopAnimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default TimerCountdown;
