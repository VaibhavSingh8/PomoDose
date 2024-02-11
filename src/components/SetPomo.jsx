import { useState, useContext } from "react";
import Button from "./Button";
import { TimerContext } from "../context/ContextProvider";

const SetPomo = () => {
  const [newTimer, setNewTimer] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
    active: "work",
  });

  const { updateExecute } = useContext(TimerContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="">
      <form noValidate onSubmit={handleSubmit}>
        <div className="gap-y-6 mx-10 sm:mx-auto flex flex-col sm:flex-row sm:justify-between">
          <input
            className="border border-gray-500"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="border border-gray-500"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.shortBreak}
          />
          <input
            className="border border-gray-500"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.longBreak}
          />
        </div>
        <Button
          title="Set Timer"
          className="flex justify-center mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50"
          callBack={handleSubmit}
        />
      </form>
    </div>
  );
};

export default SetPomo;
