import SetPomo from "./components/SetPomo";
import TimerCountdown from "./components/TimerCountdown";
import { useContext, useEffect } from "react";
import { TimerContext } from "./context/ContextProvider";
import Button from "./components/Button";

function App() {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(TimerContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <div className="flex flex-col items-center justify-center text-sm p-1.5 list-none bg-[#0C0E1B] min-h-screen ">
      <h1 className="text-4xl mb-1 text-zinc-300">Pomodose</h1>
      <small className="text-zinc-300">
        Your ultimate time management companion!
      </small>
      {pomodoro !== 0 ? (
        <>
          <ul className="flex uppercase text-sm p-1.5 list-none bg-[#0C0E1B] rounded-3xl">
            <li>
              <Button
                title="Work"
                className={
                  executing.active === "work" ? "active-label" : undefined
                }
                callBack={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                className={
                  executing.active === "short" ? "active-label" : undefined
                }
                callBack={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                className={
                  executing.active === "long" ? "active-label" : undefined
                }
                callBack={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" callBack={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <TimerCountdown
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </TimerCountdown>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              title="Start"
              className={!startAnimate ? "active" : undefined}
              callBack={startTimer}
            />
            <Button
              title="Pause"
              className={startAnimate ? "active" : undefined}
              callBack={pauseTimer}
            />
          </div>
        </>
      ) : (
        <SetPomo />
      )}
    </div>
  );
}

export default App;
