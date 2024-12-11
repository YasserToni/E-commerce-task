import React, { useState } from "react";

function RadioChooser() {
  const [selected, setSelected] = useState(null);
  const options = [
    {
      id: 1,
      label: "منتج واحد فقط",
      priceAfter: "6500ج",
      priceBefore: "7000ج",
    },
    {
      id: 2,
      label: "اشتري 2 و احصل على خصم 10٪",
      priceAfter: "12,000ج",
      priceBefore: "13,000ج",
    },
    {
      id: 3,
      label: "اشتري 3 و احصل على خصم 15٪",
      priceAfter: "18,000ج",
      priceBefore: "19,500ج",
    },
  ];
  return (
    <div dir="rtl" className="mb-6">
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex items-center justify-between w-full max-w-[580px] my-5 px-3 py-2 border rounded-lg cursor-pointer ${
            selected === option.id
              ? "border-[#3074F0]  border-2"
              : "border-[#CCD3E1]"
          }`}
          onClick={() => setSelected(option.id)}
        >
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="selectable-product"
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="cursor-pointer"
              />
              <span className="text-xl sm:text-base sm:leading-4 font-bold font-fm text-[#252534]">
                {option.label}
              </span>
            </label>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-base sm:leading-4 font-bold text-[##454545] font-fb">
              {option.priceAfter}
            </span>
            <span className="text-sm line-through text-[##808080]">
              {option.priceBefore}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RadioChooser;
