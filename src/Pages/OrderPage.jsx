import Footer from "@/components/ui/footer/Footer";
import OrderSummery from "@/components/ui/order/OrderSummery";
import PaymentChooser from "@/components/ui/order/PaymentChooser";
import PersonalDAta from "@/components/ui/order/PersonalData";
import PaymentHeader from "@/components/ui/payment/PaymentHeader";

function OrderPage() {
  return (
    <>
      <PaymentHeader />

      <div
        dir="rtl"
        className="px-14 sm:px-4 flex gap-7 sm:gap-3 mt-7 sm:flex-col"
      >
        <div className="mb-6">
          <PersonalDAta />
          <PaymentChooser />
        </div>
        <div>
          <OrderSummery />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderPage;
