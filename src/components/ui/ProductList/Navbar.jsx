import { SelectDefault } from "./Select";
import { CiFilter } from "react-icons/ci";
import { BsArrowDownUp } from "react-icons/bs";
import SectionFilter from "../filter/SectionFilter";
import RankFilter from "../filter/RankFilter";

function Navbar() {
  return (
    <div className="flex justify-between items-center mb-4 sm:mb-0">
      <div className="flex gap-2 items-end">
        <span className="font-fm text-2xl sm:text-[20px] text-[#212328] sm:leading-[30px] font-medium">
          قائمة المنتجات
        </span>
        <span className="font-fm text-base sm:text-sm sm:leading-5 font-medium text-[#767676]">
          (230)
        </span>
      </div>
      <div className="hidden sm:flex gap-2 ml-4 text-sm">
        <span className="w-6 h-6 card-shadow bg-white flex items-center justify-center rounded-[8px]">
          {/* <CiFilter /> */}
          <SectionFilter />
        </span>
        <span className="w-6 h-6 card-shadow bg-white flex items-center justify-center rounded-[8px]">
          {/* <BsArrowDownUp /> */}
          <RankFilter />
        </span>
      </div>
      <div className="flex items-center gap-2 sm:hidden ml-11">
        <span className="font-normal font-fr text-base text-[#5C5C5C]">
          ترتيب حسب
        </span>
        <SelectDefault />
      </div>
    </div>
  );
}

export default Navbar;
