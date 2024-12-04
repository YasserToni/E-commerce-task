import { IoFlash } from "react-icons/io5";

function DataHead({ title }) {
  return (
    <div
      dir="rtl"
      className=" my-7 sm:my-4 max-w-[580px] flex justify-start items-center gap-2 rounded-lg font-bold text-xl sm:text-sm font-fb text-[#454545] bg-[#3074F014] p-4 "
    >
      <IoFlash className="text-[#3074F0]" />
      {title}
    </div>
  );
}

export default DataHead;
