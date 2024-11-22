import { useState } from "react";

function Spaces() {
  const [selectedSpace, setSelectedSpace] = useState(null);

  const spaces = [
    { name: "sm", title: "20x30" },
    { name: "md", title: "20x30" },
    { name: "lg", title: "20x30" },
    { name: "xl", title: "20x30" },
    { name: "2xl", title: "20x30" },
  ];
  return (
    <div dir="rtl" className="my-4">
      <div className="my-2 font-semibold font-fm text-lg text-[#454545]">
        المساحة:
      </div>
      <div className="flex max-w-[580px] gap-2">
        {spaces.map((space, index) => (
          <div
            key={index}
            onClick={() => setSelectedSpace(space.name)}
            className={`flex flex-col items-center justify-center font-semibold w-[108px] h-[40px] font-fm  border rounded-lg cursor-pointer ${
              selectedSpace === space.name
                ? " border-2 border-[#3074F0]"
                : "text-[#6E768F] border-[#CFD7E5]"
            }`}
          >
            {/* Color Name */}
            <span
              className={`text-lg font-medium font-fm ${
                selectedSpace === space.name
                  ? "text-[#3074F0]"
                  : "text-[#6E768F]"
              }`}
            >
              {space.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spaces;
