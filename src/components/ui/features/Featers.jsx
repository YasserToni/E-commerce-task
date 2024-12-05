import delivery from "../../../assets/icons/delivery 1.svg";
import moneyIcon from "../../../assets/icons/money 1.svg";
import copounIcon from "../../../assets/icons/coupon 1.svg";
import headPhone from "../../../assets/icons/headphone 1.svg";

function Featers() {
  return (
    <div
      dir="rtl"
      className="flex justify-between items-center  py-6 sm:py-3 px-16 sm:px-2 mx-20 sm:mx-0  my-14 sm:my-8 shadow-[0px_4px_29px_0px_#2123280F]"
    >
      <div className="flex justify-between sm:flex-col shrink-0 sm:px-1  items-center gap-4 sm:gap-1 pl-20 sm:pl-2  border-l border-solid border-[#ECECEC]">
        <div>
          <img
            className="w-10 sm:w-6 h-10 sm:h-6"
            src={delivery}
            alt="free shipping"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-lg sm:text-[10px] leading-5 py-px">
            توصيل مجاني
          </span>
          <span className="font-normal text-sm leading-5 sm:hidden ">
            طلبيات حتي 1500ج
          </span>
        </div>
      </div>
      <div className="flex justify-between sm:flex-col shrink-0  sm:px-1 items-center gap-4 sm:gap-1 pl-20 sm:pl-2  border-l border-solid border-[#ECECEC]">
        <img
          className="w-10 sm:w-6 h-10 sm:h-6"
          src={moneyIcon}
          alt="free shipping"
        />
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-lg sm:text-[10px] leading-5 py-px">
            عروض وخصومات
          </span>
          <span className="font-normal text-sm leading-5 sm:hidden ">
            عروض وخصومات دائمة
          </span>
        </div>
      </div>
      <div className="flex justify-between sm:flex-col shrink-0  sm:px-1 items-center gap-4 sm:gap-1 pl-20 sm:pl-2  border-l border-solid border-[#ECECEC]">
        <img
          className="w-10 sm:w-6 h-10 sm:h-6"
          src={copounIcon}
          alt="free shipping"
        />
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-lg sm:text-xs leading-5 py-px">
            الدفع عند الاستلام
          </span>
          <span className="font-normal sm:text-[10px] leading-5 sm:hidden ">
            ميزة الدفع عند الاستلام
          </span>
        </div>
      </div>
      <div className="flex justify-between sm:flex-col shrink-0  sm:px-1  items-center gap-4 sm:gap-1 pl-20 sm:pl-2 ">
        <img
          className="w-10 sm:w-6 h-10 sm:h-6"
          src={headPhone}
          alt="free shipping"
        />
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-lg sm:text-xs leading-5 py-px">
            خدمة العملاء
          </span>
          <span className="font-normal sm:text-[10px] leading-5 sm:hidden ">
            متوفرة 24/7
          </span>
        </div>
      </div>
    </div>
  );
}

export default Featers;
