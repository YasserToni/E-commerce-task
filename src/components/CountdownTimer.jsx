import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialHours }) => {
  const [timeLeft, setTimeLeft] = useState(initialHours * 3600); // Convert hours to seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, [timeLeft]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div dir="rtl" className="flex gap-2 items-center">
      <span className="font-fr text-xl sm:text-sm leading-4 font-normal text-[#454545] mx-2 flex items-end">
        ينتهي في
      </span>
      <span className="bg-[#FF000021] text-[#FF2C2C] rounded-md  w-8  h-8 sm:w-5 sm:h-5  sm:text-xs sm:leading-4 font-bold font-fb flex items-center justify-center">
        {String(seconds).padStart(2, "0")}
      </span>

      <span className="text-[#FF2C2C] text-lg font-bold font-fb sm:text-xs sm:leading-4">
        :
      </span>
      <span className="bg-[#FF000021] text-[#FF2C2C] rounded-md w-8 h-8 sm:w-5 sm:h-5  sm:text-xs sm:leading-4  text-lg font-bold font-fb flex items-center justify-center">
        {String(minutes).padStart(2, "0")}
      </span>
      <span className="text-[#FF2C2C] text-lg font-bold font-fb sm:text-xs sm:leading-4">
        :
      </span>
      <span className="bg-[#FF000021] text-[#FF2C2C] rounded-md  w-8 h-8 sm:w-5 sm:h-5  sm:text-xs sm:leading-4  text-lg font-bold font-fb flex items-center justify-center">
        {String(hours).padStart(2, "0")}
      </span>
    </div>
  );
};

export default CountdownTimer;
