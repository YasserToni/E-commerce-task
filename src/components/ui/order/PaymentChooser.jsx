import RadioButton from "../productDetials/RadioButton";

function PaymentChooser() {
  return (
    <div dir="rtl" className="p-7 box-shadow rounded-3xl w-[660px]  mb-5">
      <div className="flex flex-col mb-2">
        <span className="mb-1 font-bold font-fb text-2xl text-[#252534]">
          طريقة الدفع
        </span>
        <span className="font-medium font-fm text-lg text-[#7D7D7D]">
          قم باختيار طريقه الدفع المناسبة لك
        </span>
      </div>
      <RadioButton />
    </div>
  );
}

export default PaymentChooser;
