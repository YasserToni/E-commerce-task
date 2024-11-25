import { RiShieldCheckLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../../../public/logg.jpg";

function PaymentHeader() {
  return (
    <header
      dir="rtl"
      className="flex justify-between items-center border-b px-14 sm:px-4 py-3 font-logo w-full"
    >
      <div className="flex items-center sm:gap-2">
        <span className="w-6 sm:w-[18px]  h-6 sm:h-[18px] text-primary flex items-center">
          <RiShieldCheckLine />
        </span>
        <span className="font-fb font-bold text-lg sm:text-base text-p[#454545]">
          دفع امن
        </span>
      </div>
      <div className="flex justify-between items-center gap-3 sm:gap-1">
        <img
          src={logo}
          alt="Logo"
          className="w-10 sm:w-6 h-10 sm:h-6 flex items-center"
        />
        <span className="font-bold text-3xl sm:text-lg leading-10 ">تسوق</span>
      </div>
      <div className="flex gap-4 sm:gap-2">
        <div className="flex items-center">
          <span className="w-6 h-6 text-primary flex items-center ">
            <IoChatbubblesOutline />
          </span>
          <span className="font-fb font-bold text-lg text-[#454545] sm:hidden">
            الدعم الفني
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-6 h-6 text-primary flex items-center">
            <FiPhoneCall />
          </span>
          <span className="font-fb font-bold text-lg text-[#454545] sm:hidden">
            54841
          </span>
        </div>
      </div>
    </header>
  );
}

export default PaymentHeader;
