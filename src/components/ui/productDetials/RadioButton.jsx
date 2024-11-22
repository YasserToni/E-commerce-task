import React, { useState } from "react";

function RadioButton() {
  const [selected, setSelected] = useState(false);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const [selectedThree, setSelectedTree] = useState(false);
  return (
    <div dir="rtl" className="mb-6">
      <div
        className={`flex items-center justify-between w-full max-w-[580px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
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
            className="text-xl font-bold font-fm text-[#252534]"
          >
            منتج واحد فقط
          </label>
        </div>

        {/* Left: Price Section */}
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[##454545] font-fb">
            6500ج
          </span>
          <span className="text-sm line-through text-[##808080]">7000ج</span>
        </div>
      </div>
      <div
        className={`flex items-center justify-between w-full max-w-[580px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
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
            className="text-xl font-bold font-fm text-[#252534]"
          >
            اشتري 2 و احصل على خصم 10٪
          </label>
        </div>

        {/* Left: Price Section */}
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[##454545] font-fb">
            12,000ج
          </span>
          <span className="text-sm line-through text-[##808080]">13,000ج</span>
        </div>
      </div>
      <div
        className={`flex items-center justify-between w-full max-w-[580px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
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
          <label
            onClick={(e) => e.stopPropagation()} // Prevent clicking the label from toggling the whole box
            className="text-xl font-bold font-fm text-[#252534]"
          >
            اشتري 3 و احصل على خصم 15٪
          </label>
        </div>

        {/* Left: Price Section */}
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[##454545] font-fb">
            18,000ج
          </span>
          <span className="text-sm line-through text-[##808080]">19,500ج</span>
        </div>
      </div>
    </div>
  );
}

export default RadioButton;
