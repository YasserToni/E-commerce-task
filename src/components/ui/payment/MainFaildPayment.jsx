import { Link } from "react-router-dom";
import failPaymentImage from "../../../assets/payment/failedPayment.png";
function MainFaildPayment() {
  return (
    <main className="flex flex-grow-2 justify-center items-center flex-col mx-14 sm:mx-0">
      <img
        className="max-w-[333px] max-h-[286px] sm:max-w-[224px] sm:max-h-[194px]"
        src={failPaymentImage}
        alt="Failed Payment"
      />
      <span className="font-bold font-fb text-[38px] sm:text-[26px] leading-[55px] sm:leading-9 text-[#263238] ">
        لم تتم عملية الدفع بنجاح!
      </span>
      <span className="font-medium font-fm text-lg text-[#8B939F] sm:text-base">
        لقد فشلت عملية الدفع, يرجي المحاولة مرة اخري.
      </span>
      <div className="flex gap-2 my-4 sm:flex-col sm:justify-center sm:items-center">
        <button className="flex justify-center items-center w-[217px] sm:w-[150px]  h-[59px] sm:h-[43px] bg-primary rounded-[60px]  font-bold font-fb text-xl sm:text-base text-white">
          العودة الي الدفع
        </button>
        <button>
          <Link
            to={"/"}
            className="flex justify-center items-center w-[320px] sm:w-[237px] h-[60px] sm:h-[43px] bg-[#E8E8E8] text-primary rounded-[60px] font-bold font-fb text-xl sm:text-base"
          >
            الذهاب الي الصفحة الرئيسية
          </Link>
        </button>
      </div>
    </main>
  );
}

export default MainFaildPayment;
