import { useState } from "react";
import creditCardIcon from "../../../assets/payment_options_icons/credit-card (1) 1.svg";
import PayTabs from "../../../assets/payment_options_icons/Daco_340551 1.svg";
import Paymob from "../../../assets/payment_options_icons/images (1) 1.svg";
import pay from "../../../assets/payment_options_icons/money (1) 1.svg";

export default function PaymentOptions() {
  const [selected, setSelected] = useState(false);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const [selectedThree, setSelectedTree] = useState(false);
  const [selectedFoure, setSelectedFoure] = useState(false);
  return (
    <div dir="rtl" className="mb-6">
      <div
        className={`flex items-center justify-between w-full max-w-[580px] h-[69px] sm:h-[47px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
          selected ? "border-[#3074F0] border-2" : "border-[##CCD3E1]"
        }`}
        onClick={() => setSelected(!selected)}
      >
        {/* Right: Radio Button and Label */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="price-selection"
            checked={selected}
            onChange={() => setSelected(!selected)}
            className=" text-[#3074F0] focus:ring-[##CCD3E1]"
          />
          <label
            onClick={(e) => e.stopPropagation()} // Prevent clicking the label from toggling the whole box
            className="text-lg leading-[26px] sm:text-sm sm:leading-[18px] font-semibold font-fm text-[#252534]"
          >
            الدفع عند الاستلام
          </label>
        </div>

        {/* Left: Price Section */}
        <div className="w-[42px] h-[42px] sm:w-[29px] sm:h-[29px]">
          <img src={pay} alt="" />
        </div>
      </div>
      <div
        className={`flex items-center justify-between w-full max-w-[580px] h-[69px] sm:h-[47px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
          selectedTwo ? "border-[#3074F0] border-2" : "border-[##CCD3E1]"
        }`}
        onClick={() => setSelectedTwo(!selectedTwo)}
      >
        {/* Right: Radio Button and Label */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="price-selection"
            checked={selectedTwo}
            onChange={() => setSelectedTwo(!selectedTwo)}
            className=" text-[#3074F0] focus:ring-[##CCD3E1]"
          />
          <label
            onClick={(e) => e.stopPropagation()} // Prevent clicking the label from toggling the whole box
            className="text-lg leading-[26px] sm:text-sm sm:leading-[18px] font-medium font-fm text-[#252534]"
          >
            بواسطة PayTabs
          </label>
        </div>

        {/* Left: Price Section */}
        <div className="w-[80px] h-[24px] sm:w-[40px] sm:h-[16px]">
          <img src={PayTabs} alt="" />
        </div>
      </div>
      <div
        className={`flex items-center justify-between w-full max-w-[580px] h-[69px] sm:h-[47px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
          selectedThree ? "border-[#3074F0] border-2" : "border-[##CCD3E1]"
        }`}
        onClick={() => setSelectedTree(!selectedThree)}
      >
        {/* Right: Radio Button and Label */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="price-selection"
            checked={selectedThree}
            onChange={() => setSelectedTree(!selectedThree)}
            className=" text-[#3074F0] focus:ring-[##CCD3E1]"
          />
          <label className="text-lg leading-[26px] sm:text-sm sm:leading-[18px] font-medium font-fm text-[#252534]">
            بواسطة Paymob
          </label>
        </div>

        {/* Left: Price Section */}
        <div className="w-[73px] h-[30px] sm:w-[45px] sm:h-[20]">
          <img src={Paymob} alt="" />
        </div>
      </div>
      <div
        className={`flex items-center justify-between w-full max-w-[580px] h-[69px] sm:h-[47px]  my-5 px-3 py-2 border rounded-lg cursor-pointer ${
          selectedThree ? "border-[#3074F0] border-2" : "border-[##CCD3E1]"
        }`}
        onClick={() => setSelectedFoure(!selectedFoure)}
      >
        {/* Right: Radio Button and Label */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="price-selection"
            checked={selectedThree}
            onChange={() => setSelectedFoure(!selectedFoure)}
            className=" text-[#3074F0] focus:ring-[##CCD3E1]"
          />
          <label className="text-lg leading-[26px] sm:text-sm sm:leading-[18px] font-medium font-fm text-[#252534]">
            بواسطة بطاقة الإتمئنان
          </label>
        </div>

        {/* Left: Price Section */}
        <div className="w-[31px] h-[31px] sm:w-[21px] sm:h-[21px]">
          <img src={creditCardIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
