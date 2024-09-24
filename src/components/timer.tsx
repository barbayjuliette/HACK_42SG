"use client";
import { FC, useEffect, useState } from "react";

interface TimerProps {}

const Timer: FC<TimerProps> = (props) => {
  const [minute, setMinute] = useState<number>(14);
  const [second, setSecond] = useState<number>(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (second == 0) {
        setMinute(minute - 1);
        setSecond(59);
      } else {
        setSecond(second - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="rounded-full h-[50px] w-[50px] flex items-center justify-center border-4 border-gray-300 bg-white">
      <p className="font-bold text-black">
        14:{second < 10 ? `0${second}` : second}
      </p>
    </div>
  );
};

export default Timer;
