import { createContext, useState } from "react";

export const TimerContext = createContext();

const ContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }

  function stopTimer() {
    setStartAnimate(false);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  // pass time to counter
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  // clear session storage
  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.shortBreak);
        break;
      case "long":
        setPomodoro(evaluate.longBreak);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAnimate() {
    setStartAnimate(false);
  }

  return (
    <TimerContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        stopAnimate,
        startTimer,
        pauseTimer,
        children,
        updateExecute,
        setCurrentTimer,
        SettingsBtn,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default ContextProvider;
