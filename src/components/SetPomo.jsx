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
    const parsedValue = parseInt(value);
    const updatedValue = isNaN(parsedValue) ? 0 : parsedValue;

    setNewTimer({
      ...newTimer,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="text-center">
      <form noValidate onSubmit={handleSubmit}>
        <div className="gap-y-6 sm:mx-auto flex flex-col justify-center items-center sm:flex-row sm:justify-between mt-4">
          <input
            className="border border-gray-500 w-1/4 p-4 bg-[#0C0E1B] text-white text-center"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="border border-gray-500 w-1/4 p-4 bg-[#0C0E1B] text-white text-center"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.shortBreak}
          />
          <input
            className="border border-gray-500 w-1/4 p-4 bg-[#0C0E1B] text-white text-center"
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
