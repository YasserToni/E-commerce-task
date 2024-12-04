import { TfiHeadphoneAlt } from "react-icons/tfi";
// import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDiscount } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import deliveryIcon from "../../../assets/summery-Features-icon/delivery.png";
import moneyIcon from "../../../assets/summery-Features-icon/money.png";
import couponIcon from "../../../assets/summery-Features-icon/coupon.png";
import headphoneIcon from "../../../assets/summery-Features-icon/headphone.png";

function SummeryFeatures() {
  return (
    <div
      dir="rtl"
      className="flex gap-12 sm:gap-8 sm:flex-wrap sm:items-center sm:justify-between"
    >
      <div className="flex sm:w-[103px] sm:h-[81px] flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 sm:w-[53px] sm:h-[53px] rounded-[50%] bg-[#EAF1FD] text-primary pt-2 flex items-center justify-center">
          <img
            src={deliveryIcon}
            alt="deliver icon"
            className="w-[43px] h-[43px]"
          />
        </div>
        <div className=" font-bold font-fb text-lg sm:text-sm text-[#454545]">
          توصيل مجاني
        </div>
      </div>
      <div className="flex flex-col sm:w-[103px] sm:h-[81px]  items-center justify-center gap-3">
        <div className="w-16 h-16 sm:w-[53px] sm:h-[53px] rounded-[50%] bg-[#EAF1FD] text-primary flex items-center justify-center">
          <img
            src={couponIcon}
            alt="coupon icon"
            className="w-[33px] h-[33px]"
          />
        </div>
        <div className="font-bold font-fb text-lg sm:text-sm text-[#454545]">
          عروض وخصومات
        </div>
      </div>
      <div className="flex flex-col sm:w-[110px] sm:h-[81px]  items-center justify-center gap-3">
        <div className="w-16 h-16 sm:w-[53px] sm:h-[53px] rounded-[50%] bg-[#EAF1FD] text-primary flex items-center justify-center">
          <img
            src={moneyIcon}
            alt="Money icon"
            className="w-[38px]  h-[38px] "
          />
        </div>
        <div className="font-bold font-fb text-lg sm:text-sm text-[#454545]">
          الدفع عند الاستلام
        </div>
      </div>
      <div className="flex flex-col sm:w-[103px] sm:h-[81px]  items-center justify-center gap-3">
        <div className="w-16 h-16 sm:w-[53px] sm:h-[53px] rounded-[50%] bg-[#EAF1FD] text-primary flex items-center justify-center">
          <img
            src={headphoneIcon}
            alt="headphone icon"
            className="w-[39px] h-[39px]"
          />
        </div>
        <div className="font-bold font-fb text-lg sm:text-sm text-[#454545]">
          خدمة العملاء
        </div>
      </div>
    </div>
  );
}

export default SummeryFeatures;
