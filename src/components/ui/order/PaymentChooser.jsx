import PaymentOptions from "./PaymentOptions";

function PaymentChooser() {
  return (
    <div
      dir="rtl"
      className="p-7 sm:p-4 box-shadow rounded-3xl w-[660px] sm:w-[328px]  mb-5 sm:mb-2"
    >
      <div className="flex flex-col mb-2">
        <span className="mb-1 font-bold font-fb text-2xl sm:text-lg sm:leading-[26px] text-[#252534]">
          طريقة الدفع
        </span>
        <span className="font-medium font-fm text-lg sm:text-base text-[#7D7D7D]">
          قم باختيار طريقه الدفع المناسبة لك
        </span>
      </div>
      <PaymentOptions />
    </div>
  );
}

export default PaymentChooser;
