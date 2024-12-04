import SectionCard from "./ui/sections/SectionCard";
import sectionImage from "../assets/section-image/laptop.png";

const SectionRow = ({ sectionName }) => {
  return (
    <div dir="rtl" className="relative w-full mb-14 sm:mb-7">
      <div className="flex justify-between my-6 sm:my-2">
        <div className="h-9 sm:h-6 flex items-center gap-2">
          <span className="w-2 sm:w-1 h-full bg-primary rounded-lg"></span>
          <span className="font-logo font-bold text-3xl sm:text-base sm:leading-6 text-[##212328]">
            {sectionName}
          </span>
        </div>
      </div>

      {/* Section Cards Row */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {Array.from({ length: 10 }).map((item, index) => (
          <SectionCard
            key={index + 1}
            cardName={"لابتوب"}
            imgSrc={sectionImage}
            imgAlt={"لابتوب"}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionRow;
