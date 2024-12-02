// import PaymentHeader from "@/components/ui/payment/PaymentHeader";
import successPaymentImage from "../assets/payment/succes_payment.png";
import Card from "../components/ui/order/Card";
import MoenyDetails from "@/components/ui/order/MoenyDetails";
import { Link } from "react-router-dom";
import Footer from "@/components/ui/footer/Footer";
import Header from "@/components/ui/header/Header";
import CardForSuccessPage from "@/components/ui/payment/CardForSuccessPage";

function SuccessPage() {
  return (
    <>
      <Header />
      <div dir="rtl" className=" flex flex-col ">
        <main className="flex  justify-center items-center flex-col mx-14 sm:mx-8">
          <img
            className="max-w-[333px] max-h-[286px] sm:max-w-[224px]"
            src={successPaymentImage}
            alt="Failed Payment"
          />
          <span className="font-bold font-fb text-[41px] sm:text-[26px]  leading-[60px] sm:leading-9 text-[#263238] ">
            شكراً لك!
          </span>
          <span className="font-medium font-fb text-[41px] sm:text-[26px] leading-[60px] sm:leading-9 text-primary ">
            لقد تم تأكيد طلبك بنجاح!
          </span>
          <span className="font-medium font-fm text-lg sm:text-base text-[#8B939F] w-[400px] sm:w-[300px] text-center">
            لقد قمنا باستلام طلبك وسيتم العمل عليه. سنتواصل معك في اقرب وقت
            لاستلام طلبك.
          </span>
          <div className="px-7 sm:px-4 pt-7 pb-1 box-shadow rounded-3xl w-[660px] sm:w-[328px] mb-7 s">
            <div className="font-bold font-fb text-[26px] sm:text-lg text-[#252534]">
              ملخص الطلب
            </div>
            <CardForSuccessPage />
            <div className="border-t text-[#E5E9F1]">
              <MoenyDetails />
            </div>
            <div className="border-t border-[#E5E9F1] ">
              <div className="py-5 sm:py-3 flex items-center justify-between font-bold font-fb text-xl sm:text-base text-[#3A4353]">
                <span>إجمالي المبلغ:</span>
                <span>6500ج</span>
              </div>
            </div>
          </div>
          <Link
            to={"/"}
            className="flex justify-center items-center w-[320px] sm:w-[237px] h-[60px] sm:h-[43px] bg-primary text-white rounded-[60px] font-bold font-fb text-xl sm:text-base mb-10 sm:mb-5"
          >
            الذهاب الي الصفحة الرئيسية
          </Link>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SuccessPage;
