import SpecialCard from "./ui/special/SpecialCard";
import specialCardHeadphone from "../assets/special-images/headphone.png";
import specialCardTab from "../assets/special-images/ipad-air-model-unselect-gallery-2-202405_FMT_WHH-removebg-preview 1.png";
import specialCardScreen from "../assets/special-images/6537375cv13d-removebg-preview 1.png";
import specialCardPhone from "../assets/special-images/iphone__ky2k6x5u6vue_og-removebg-preview 1.png";

const SpecialRow = ({ sectionName }) => {
  return (
    <div dir="rtl" className="relative w-full mb-14">
      {/* Pagination Buttons */}
      <div className="flex justify-between my-6">
        <div className="h-9 sm:h-6 flex items-center gap-2">
          <span className="w-2 sm:w-1 h-full bg-primary rounded-lg"></span>
          <span className="font-fm font-bold text-3xl sm:text-base sm:leading-5 text-[##212328]">
            {sectionName}
          </span>
        </div>
      </div>

      {/* Special Cards Row */}
      <div className="flex justify-between sm:gap-4 overflow-x-auto hide-scrollbar shrink-0">
        <SpecialCard specialCardImage={specialCardHeadphone} />
        <SpecialCard specialCardImage={specialCardTab} />
        <SpecialCard specialCardImage={specialCardScreen} />
        <SpecialCard specialCardImage={specialCardPhone} />
      </div>
    </div>
  );
};

export default SpecialRow;
