import BuyButton from "../productDetials/BuyButton";
import Card from "./Card";
import Coupon from "./Coupon";
import MoenyDetails from "./MoenyDetails";
import SummeryFeatures from "./SummeryFeatures";

function OrderSummery() {
  return (
    <div className="p-7 sm:p-4 box-shadow rounded-3xl w-[660px] sm:w-[328px] mb-5">
      <div className="font-bold font-fb text-[26px] text-[#252534]">
        ملخص الطلب
      </div>
      <Card />
      <Coupon />
      <MoenyDetails />
      <BuyButton />
      <SummeryFeatures />
    </div>
  );
}

export default OrderSummery;
