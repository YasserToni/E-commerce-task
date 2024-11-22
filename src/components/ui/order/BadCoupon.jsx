import { MdOutlineReportGmailerrorred } from "react-icons/md";
function BadCoupon() {
  return (
    <div dir="rtl" className="flex justify-between bg-[#FFF0F0] py-4 px-3">
      <div className="flex gap-2 ">
        <MdOutlineReportGmailerrorred size={30} className="text-[#E10000]" />
        <span className="font-semibold font-fm text-lg text-[#252534]">
          كوبون الخصم غير صالح.
        </span>
      </div>
      <span className="text-xl pl-2">x</span>
    </div>
  );
}

export default BadCoupon;
