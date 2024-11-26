import { FaStar } from "react-icons/fa";

function Rate({ percentage, numberofStar }) {
  return (
    <div dir="rtl" className="flex items-center gap-10 sm:gap-3">
      <div className="flex items-center gap-3 sm:gap-1">
        <span className="font-normal font-fr text-base sm:text-[10px] leading-4 sm:leading-3 text-[#6B6B6B]">
          {numberofStar}
        </span>
        <span dir="ltr" className="flex gap-1 sm:gap-[2px] sm:text-[7px]">
          <FaStar
            className={`${
              numberofStar >= 1 ? "text-primary " : "text-[#787878]"
            }`}
          />
          <FaStar
            className={`${
              numberofStar >= 2 ? "text-primary  " : "text-[#787878]"
            }`}
          />
          <FaStar
            className={`${
              numberofStar >= 3 ? "text-primary  " : "text-[#787878]"
            }`}
          />
          <FaStar
            className={`${
              numberofStar >= 4 ? "text-primary " : "text-[#787878]"
            }`}
          />
          <FaStar
            className={`${
              numberofStar >= 5 ? "text-primary " : "text-[#787878]"
            }`}
          />
        </span>
      </div>
      <div className="flex items-center gap-3 sm:gap-1">
        <div className="h-1.5 sm:h-1 w-[316px] sm:w-[193px] bg-gray-300 relative overflow-hidden rounded-lg">
          <div
            className={`h-full bg-blue-500 origin-right transform scale-x-[60%}] rounded-lg`}
            style={{ transformOrigin: "right" }}
          />
        </div>
        <span className="font-medium font-fm text-sm sm:text-[9px] leading-4 sm:leading-[10px] text-[#6B6B6B]">
          {percentage}%
        </span>
      </div>
    </div>
  );
}

export default Rate;
