import { useState } from "react";
import creditCardIcon from "../../../assets/payment_options_icons/credit-card (1) 1.svg";
import PayTabs from "../../../assets/payment_options_icons/Daco_340551 1.svg";
import Paymob from "../../../assets/payment_options_icons/images (1) 1.svg";
import pay from "../../../assets/payment_options_icons/money (1) 1.svg";

export default function PaymentOptions() {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: 1,
      label: "الدفع عند الاستلام",
      image: pay,
    },
    {
      id: 2,
      label: "بواسطة PayTabs",
      image: PayTabs,
    },
    {
      id: 3,
      label: "بواسطة Paymob",
      image: Paymob,
    },
    {
      id: 4,
      label: "بواسطة بطاقة الإتمئنان",
      image: creditCardIcon,
    },
  ];
  return (
    <div dir="rtl" className="mb-6">
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex items-center justify-between w-full max-w-[580px] h-[69px] sm:h-[47px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
            selected === option.id
              ? "border-[#3074F0] border-2"
              : "border-[##CCD3E1]"
          }`}
          onClick={() => setSelected(option.id)}
        >
          {/* Right: Radio Button and Label */}
          <div className="flex items-center gap-2 ">
            <lable className="flex items-center gap-4 sm:gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment-selection"
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="cursor-pointer"
              />
              <span className="text-lg leading-[26px] sm:text-sm sm:leading-[18px] font-semibold font-fm text-[#252534]">
                {option.label}
              </span>
            </lable>
          </div>

          {/* Left: Price Section */}
          <div className="w-[42px] h-[42px] sm:w-[29px] sm:h-[29px] flex items-center">
            <img src={option.image} alt={option.label} />
          </div>
        </div>
      ))}
    </div>
  );
}
