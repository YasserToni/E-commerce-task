import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Colors() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [searchParams] = useSearchParams();
  const paramSpace = searchParams.get("space");

  const colors = [
    { name: "red", title: "رمادي" },
    { name: "green", title: "سيلفر" },
    { name: "blue", title: "ازرق" },
    { name: "yellow", title: "احمر" },
    { name: "white", title: "بنفسجي" },
  ];
  return (
    <div dir="rtl" className="my-4  sm:my-4">
      <div
        dir="rtl"
        className="my-2 font-semibold font-fm text-lg text-[#454545]"
      >
        اللون:
      </div>

      <div className="flex max-w-[580px] sm:max-w-[298px] gap-2">
        {colors.map((color, index) => (
          <Link
            key={index}
            to={`${
              paramSpace
                ? `/product?space=${paramSpace}&color=${color.name}`
                : `/product?color=${color.name}`
            }`}
          >
            <div
              onClick={() => setSelectedColor(color.name)}
              className={`flex flex-col items-center flex-wrap justify-center font-semibold w-[108px] sm:w-[70px] h-[40px] sm:h-[32px] font-fm  border rounded-lg cursor-pointer ${
                selectedColor === color.name
                  ? " border-2 border-[#3074F0]"
                  : "text-[#6E768F] border-[#CFD7E5]"
              }`}
            >
              {/* Color Name */}
              <span
                className={`text-lg sm:text-sm font-medium font-fm ${
                  selectedColor === color.name
                    ? "text-[#3074F0]"
                    : "text-[#6E768F]"
                }`}
              >
                {color.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Colors;
