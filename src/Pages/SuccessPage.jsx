import PaymentFooter from "@/components/ui/payment/PaymentFooter";
import PaymentHeader from "@/components/ui/payment/PaymentHeader";
import successPaymentImage from "../assets/payment/succes_payment.png";
import Card from "../components/ui/order/Card";
import MoenyDetails from "@/components/ui/order/MoenyDetails";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <>
      <PaymentHeader />
      <div dir="rtl" className=" flex flex-col ">
        <main className="flex  justify-center items-center flex-col mx-14">
          <img
            className="max-w-[333px] max-h-[286px]"
            src={successPaymentImage}
            alt="Failed Payment"
          />
          <span className="font-bold font-fb text-[41px] leading-[60px] text-[#263238] ">
            شكراً لك!
          </span>
          <span className="font-medium font-fb text-[41px] leading-[60px] text-primary ">
            لقد تم تأكيد طلبك بنجاح!
          </span>
          <span className=" font-medium font-fm text-lg text-[#8B939F] ">
            لقد قمنا باستلام طلبك وسيتم العمل عليه. سنتواصل معك في اقرب وقت
          </span>
          <span className=" font-medium font-fm text-lg text-[#8B939F] ">
            لاستلام طلبك.
          </span>
          <div className="px-7 pt-7 pb-1 box-shadow rounded-3xl w-[660px] mb-7">
            <div className="font-bold font-fb text-[26px] text-[#252534]">
              ملخص الطلب
            </div>
            <Card />
            <div className="border-t text-[#E5E9F1]">
              <MoenyDetails />
            </div>
            <div className="border-t border-[#E5E9F1] ">
              <div className="py-5 flex items-center justify-between font-bold font-fb text-xl text-[#3A4353]">
                <span>إجمالي المبلغ:</span>
                <span>6500ج</span>
              </div>
            </div>
          </div>
          <button>
            <Link
              to={"/"}
              className="flex justify-center items-center w-[320px] h-[60px] bg-primary text-white rounded-[60px] font-bold font-fb text-xl mb-10"
            >
              الذهاب الي الصفحة الرئيسية
            </Link>
          </button>
        </main>
      </div>
      <PaymentFooter />
    </>
  );
}

export default SuccessPage;
