import { useEffect, useState } from "react";
import Block from "./components/Block";

import mel1 from "./images/mel1.jpg";
import mel2 from "./images/mel2.jpg";
import mel3 from "./images/mel3.jpg";

function App() {

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const targetDate = new Date('December 31, 2023 07:59:59');

      const difference = targetDate.getTime() - currentDate.getTime();

      if (difference > 0) {
        const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
        const secondsLeft = Math.floor((difference / 1000) % 60);

        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-bleh-cat md:bg-cover bg-contain relative">
      <img src={mel2} alt="mel2" className="absolute md:left-[80%] left-[60%] top-[20%] md:w-52 w-32" />
      <img src={mel3} alt="mel3" className="absolute left-[50%] top-[60%] md:w-52 w-32" />
      <img src={mel1} alt="mel1" className="absolute left-[10%] top-[20%] md:w-52 w-32" />
      <div className="bg-gray-800 gap-5 flex flex-col justify-center items-center md:bg-opacity-80 bg-opacity-50 rounded-lg p-10 z-50">
        <p className="text-white md:text-[30px] text-[15px] font-bold">There is exactly</p>
        <div className="flex md:flex-row flex-col gap-5 justify-center items-center text-white font-bold md:text-[40px] text-[15px]">
          <Block number={days} description="days" />
          :
          <Block number={hours} description="hours" />
          :
          <Block number={minutes} description="minutes" />
          :
          <Block number={seconds} description="seconds" />
        </div>
        <p className="text-white md:text-[30px] text-[15px] font-bold">time left until Meowanie visits Croatia.</p>
      </div>
    </div>
  );
}

export default App;
