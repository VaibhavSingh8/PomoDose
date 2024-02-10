import { useState } from "react";
import Button from "./Button";

const SetPomo = () => {
  const [newTimer, setNewTimer] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  const handleChange = (e) => {
    const parsedValue = parseInt(e.target.value);
    if (!isNaN(parsedValue)) {
      setNewTimer({ ...newTimer, [e.target.name]: parsedValue });
      // console.log(newTimer, e.target.name, parsedValue);
    } else {
      setNewTimer({ ...newTimer, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form noValidate>
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
