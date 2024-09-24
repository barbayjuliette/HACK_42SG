"use client";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

interface TimerProps {
  className?: string;
  absolute?: boolean;
}

const Timer: FC<TimerProps> = (props) => {
  const { className, absolute } = props;
  const [minute, setMinute] = useState<number>(14);
  const [second, setSecond] = useState<number>(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minute > 0) {
        if (second == 0) {
          setMinute(minute - 1);
          setSecond(59);
        } else {
          setSecond(second - 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={cn(
        `rounded-full h-[50px] w-[50px] flex items-center justify-center border-4 border-gray-300 bg-white`,
        absolute ? "absolute top-4 right-4" : "",
        className
      )}
    >
      <p className="font-bold text-black">
        {minute < 10 ? `0${minute}` : minute}:
        {second < 10 ? `0${second}` : second}
      </p>
    </div>
  );
};

export default Timer;
