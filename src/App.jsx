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
                  executing.active === "work"
                    ? "text-[#0C0E1B] bg-[#FE6F6B] p-2 rounded-xl mx-auto"
                    : "p-2 text-white rounded-md bg-zinc-500 hover:bg-zinc-600 hover:shadow-lg"
                }
                callBack={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                className={
                  executing.active === "short"
                    ? "text-[#0C0E1B] bg-[#FE6F6B] p-2 rounded-xl mx-auto"
                    : "p-2 text-white rounded-md bg-zinc-500 hover:bg-zinc-600hover:shadow-lg"
                }
                callBack={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                className={
                  executing.active === "long"
                    ? "text-[#0C0E1B] bg-[#FE6F6B] p-2 rounded-xl mx-auto"
                    : "p-2 text-white rounded-md bg-zinc-500 hover:bg-zinc-600 hover:shadow-lg"
                }
                callBack={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button
            title="Settings"
            className="text-[#0C0E1B] bg-[#FE6F6B] p-2 rounded-xl mx-auto"
            callBack={SettingsBtn}
          />
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center h-60 w-60 rounded-[7.5rem] bg-[#151932] text-[#efefef] text-5xl shadow-lg">
              <TimerCountdown
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </TimerCountdown>
            </div>
          </div>
          <div className="flex justify-center items-center p-8">
            <Button
              title="Start"
              className={
                !startAnimate
                  ? "text-[#0C0E1B] bg-[#FE6F6B] p-4 rounded-xl"
                  : "text-white bg-zinc-500 hover:bg-zinc-600 hover:shadow-lg p-4 rounded-xl mx-auto"
              }
              callBack={startTimer}
            />
            <Button
              title="Pause"
              className={
                startAnimate
                  ? "text-[#0C0E1B] bg-[#FE6F6B] p-4 rounded-xl"
                  : "text-white bg-zinc-500 hover:bg-zinc-600 hover:shadow-lg p-4 rounded-xl mx-auto"
              }
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
