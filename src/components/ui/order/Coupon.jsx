import { RiCoupon3Line } from "react-icons/ri";
import BadCoupon from "./BadCoupon";
function Coupon() {
  return (
    <div className="flex gap-5 pt-7 border-t border-[#E5E9F1] flex-col mb-7">
      <BadCoupon />
      <div className="flex gap-9 ">
        {/* Input Container */}
        <div className="relative">
          {/* Input Field */}
          <input
            type="text"
            id="input-with-icon"
            placeholder="ادخل كوبون الخصم الخاص بك"
            className="w-[411px] pr-10 pl-4 py-4 font-normal font-fr placeholder:text-lg text-sm rounded-lg bg-[#F1F2F3] text-[#A1A2A5]"
          />

          {/* Icon */}
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pb-2">
            <RiCoupon3Line className="w-5 h-5 text-[#A1A2A5] " />
          </span>
        </div>
        <button className="w-[150px] h-[54px] font-bold font-fm text-xl text-white rounded-[27px] bg-primary flex justify-center items-center">
          تطبيق
        </button>
      </div>
    </div>
  );
}

export default Coupon;
