import SectionCard from "./ui/sections/SectionCard";
import sectionImage from "../assets/section-image/laptop.png";
import { useRef, useState } from "react";

const SectionRow = ({ sectionName }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div dir="rtl" className="relative w-full mb-14 sm:mb-7">
      <div className="flex justify-between my-6 sm:my-2">
        <div className="h-9 sm:h-6 flex items-center gap-2">
          <span className="w-2 sm:w-1 h-full bg-primary rounded-lg"></span>
          <span className="font-fm font-bold text-3xl sm:text-base sm:leading-6 text-[##212328]">
            {sectionName}
          </span>
        </div>
      </div>

      {/* Section Cards Row */}
      <div
        className="flex gap-4 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
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
