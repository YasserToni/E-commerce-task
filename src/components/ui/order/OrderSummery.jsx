import { Navigate, useNavigate } from "react-router-dom";
import BuyButton from "../productDetials/BuyButton";
import Card from "./Card";
import Coupon from "./Coupon";
import MoenyDetails from "./MoenyDetails";
import SummeryFeatures from "./SummeryFeatures";

function OrderSummery() {
  const navigate = useNavigate("");
  return (
    <div className="p-7 sm:p-4 box-shadow rounded-3xl w-[660px] sm:w-[328px] mb-5">
      <div className="font-bold font-fb text-[26px] text-[#252534]">
        ملخص الطلب
      </div>
      <Card />
      <Coupon />
      <MoenyDetails />
      {/* <BuyButton /> */}
      <div className="border-t border-[#E5E9F1] mb-7 w-[581px] sm:w-[305px]">
        <div className="py-5 flex items-center justify-between font-bold font-fb text-xl text-[#3A4353]">
          <span>إجمالي المبلغ:</span>
          <span>6500ج</span>
        </div>
        <button
          onClick={() => navigate("success-order")}
          className="w-full py-4 rounded-[61px] bg-[#3074F0] text-xl font-bold font-fb text-white linerBackgound bottom-shadow"
        >
          تأكيد الطلب
        </button>
      </div>
      <SummeryFeatures />
    </div>
  );
}

export default OrderSummery;
