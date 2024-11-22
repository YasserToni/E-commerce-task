import OrderSummery from "@/components/ui/order/OrderSummery";
import PaymentChooser from "@/components/ui/order/PaymentChooser";
import PersonalDAta from "@/components/ui/order/PersonalDAta";
import PaymentFooter from "@/components/ui/payment/PaymentFooter";
import PaymentHeader from "@/components/ui/payment/PaymentHeader";

function OrderPage() {
  return (
    <>
      <PaymentHeader />

      <div dir="rtl" className="px-14 flex gap-7 mt-7">
        <div className="mb-6">
          <PersonalDAta />
          <PaymentChooser />
        </div>
        <div>
          <OrderSummery />
        </div>
      </div>
      <PaymentFooter />
    </>
  );
}

export default OrderPage;
