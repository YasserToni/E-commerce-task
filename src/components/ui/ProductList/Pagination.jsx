import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineRight,
} from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

function Pagination() {
  return (
    <div
      dir="rtl"
      className="flex justify-center items-center gap-2 sm:gap-1 my-6"
    >
      <span className="border border-[#EDEDED] text-[#CACACA] rounded-lg p-3 sm:p-1 cursor-pointer shadow-card">
        <AiOutlineDoubleRight />
      </span>
      <span className="border border-[#EDEDED] text-[#CACACA] rounded-lg p-3 sm:p-1 cursor-pointer shadow-card">
        <AiOutlineRight />
      </span>
      <span className="active bg-primary rounded-lg text-white font-semibold   text-lg active:bg-primary active:rounded-lg active:shadow-card  active:text-[#FFFFFF] font-fm px-3.5 sm:px-2.5 py-1 cursor-pointer">
        1
      </span>
      <span className="active font-semibold text-lg active:bg-primary rounded-lg  active:shadow-card text-[#6D6D6D]  active:text-[#FFFFFF] font-fm px-3.5 py-1 cursor-pointer">
        2
      </span>
      <span className="active font-semibold text-lg active:bg-primary rounded-lg  active:shadow-card text-[#6D6D6D]  active:text-[#FFFFFF] font-fm px-3.5 py-1 cursor-pointer">
        3
      </span>
      <span className="font-fm font-semibold text-lg text-[#6D6D6D] px-2 py-2   cursor-pointer">
        ...
      </span>
      <span className="active font-semibold text-lg active:bg-primary rounded-lg  active:shadow-card text-[#6D6D6D]  active:text-[#FFFFFF] font-fm px-3.5 py-1 cursor-pointer">
        14
      </span>
      <span className="border border-[#EDEDED] text-primary rounded-lg p-3 sm:p-1 cursor-pointer shadow-card">
        <AiOutlineLeft />
      </span>
      <span className="border border-[#EDEDED] text-primary rounded-lg p-3 sm:p-1 cursor-pointer shadow-card">
        <AiOutlineDoubleLeft />
      </span>
    </div>
  );
}

export default Pagination;
