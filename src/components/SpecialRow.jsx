import SpecialCard from "./ui/special/SpecialCard";
import specialCardImage from "../assets/section-image/headphone.png";

const SpecialRow = ({ sectionName }) => {
  return (
    <div dir="rtl" className="relative w-full mb-14">
      {/* Pagination Buttons */}
      <div className="flex justify-between my-6">
        <div className="h-9 sm:h-6 flex items-center gap-2">
          <span className="w-2 sm:w-1 h-full bg-primary rounded-lg"></span>
          <span className="font-logo font-bold text-3xl sm:text-base sm:leading-5 text-[##212328]">
            {sectionName}
          </span>
        </div>
      </div>

      {/* Special Cards Row */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar shrink-0">
        {Array.from({ length: 4 }).map((_, index) => (
          <SpecialCard key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default SpecialRow;
