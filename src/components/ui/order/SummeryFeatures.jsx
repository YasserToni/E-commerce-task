import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDiscount } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";

function SummeryFeatures() {
  return (
    <div dir="rtl" className="flex gap-16">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-14 rounded-full bg-[#EAF1FD] text-primary flex items-center justify-center">
          <TbTruckDelivery size={32} />
        </div>
        <div className="font-bold font-fb text-lg text-[#454545]">
          توصيل مجاني
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-14 rounded-full bg-[#EAF1FD] text-primary flex items-center justify-center">
          <MdOutlineDiscount size={32} />
        </div>
        <div className="font-bold font-fb text-lg text-[#454545]">
          عروض وخصومات
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-14 rounded-full bg-[#EAF1FD] text-primary flex items-center justify-center">
          <FaMoneyCheckAlt size={32} />
        </div>
        <div className="font-bold font-fb text-lg text-[#454545]">
          الدفع عند الاستلام
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-14 rounded-full bg-[#EAF1FD] text-primary flex items-center justify-center">
          <TfiHeadphoneAlt size={32} />
        </div>
        <div className="font-bold font-fb text-lg text-[#454545]">
          خدمة العملاء
        </div>
      </div>
    </div>
  );
}

export default SummeryFeatures;
