import { FaStar } from "react-icons/fa";

function Rate({ percentage, numberofStar }) {
  console.log(percentage / 100);
  return (
    <div dir="rtl" className="flex items-center gap-10">
      <div className="flex items-center gap-3">
        <span className="font-normal font-fr text-base leading-4 text-[#6B6B6B]">
          {numberofStar}
        </span>
        <span dir="ltr" className="flex gap-1">
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
      <div className="flex items-center gap-3">
        <div className="h-1.5 w-[316px] bg-gray-300 relative overflow-hidden rounded-lg">
          <div
            className={`h-full bg-blue-500 origin-right transform scale-x-[60%}] rounded-lg`}
            style={{ transformOrigin: "right" }}
          />
        </div>
        <span className="font-medium font-fm text-sm leading-4 text-[#6B6B6B]">
          {percentage}%
        </span>
      </div>
    </div>
  );
}

export default Rate;
