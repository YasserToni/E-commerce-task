import MainFaildPayment from "@/components/ui/payment/MainFaildPayment";
import PaymentFooter from "@/components/ui/payment/PaymentFooter";
import PaymentHeader from "@/components/ui/payment/PaymentHeader";

function FaildPayment() {
  return (
    <div className="h-screen flex flex-col ">
      <PaymentHeader />
      <MainFaildPayment />
      <PaymentFooter />
    </div>
  );
}

export default FaildPayment;
