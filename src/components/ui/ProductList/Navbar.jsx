import { SelectDefault } from "./Select";
import { CiFilter } from "react-icons/ci";
import { BsArrowDownUp } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex justify-between mb-4 sm:mb-0">
      <div>
        <span className="font-logo text-2xl sm:text-[20px] sm:leading-[30px] font-medium">
          قائمة المنتجات
        </span>
        <span className="font-logo text-base sm:text-sm sm:leading-5 font-medium">
          (230)
        </span>
      </div>
      <div className="hidden sm:flex gap-2 ml-4 text-sm">
        <span className="w-6 h-6 card-shadow bg-white flex items-center justify-center rounded-[8px]">
          <CiFilter />
        </span>
        <span className="w-6 h-6 card-shadow bg-white flex items-center justify-center rounded-[8px]">
          <BsArrowDownUp />
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
