import { useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import SectionCard from "./ui/sections/SectionCard";
import { section_data } from "../dummey data/dummey-data.js";

const SectionRow = ({ sectionName }) => {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div dir="rtl" className="relative w-full mb-14">
      {/* Pagination Buttons */}
      <div className="flex justify-between my-6">
        <div className="h-9 flex items-center gap-2">
          <span className="w-2 h-full bg-primary rounded-lg"></span>
          <span className="font-logo font-bold text-3xl text-[##212328]">
            {sectionName}
          </span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={scrollLeft}
            className="bg-primary w-8 h-8 rounded-full text-white shadow-swiper flex justify-center items-center "
          >
            <GoArrowRight />
          </button>
          <button
            onClick={scrollRight}
            className="bg-white w-8 h-8 rounded-full text-primary shadow-swiper flex justify-center items-center "
          >
            <GoArrowLeft />
          </button>
        </div>
      </div>

      {/* Product Cards Row */}
      <div ref={rowRef} className="flex gap-4 overflow-x-auto hide-scrollbar">
        {section_data.map((item, index) => (
          <SectionCard
            key={index + 1}
            cardName={item.cardName}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionRow;
