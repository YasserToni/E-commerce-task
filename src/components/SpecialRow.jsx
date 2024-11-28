import { useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import SectionCard from "./ui/sections/SectionCard";
import SpecialCard from "./ui/special/SpecialCard";

const SpecialRow = ({ sectionName }) => {
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
        <div className="h-9 sm:h-6 flex items-center gap-2">
          <span className="w-2 sm:w-1 h-full bg-primary rounded-lg"></span>
          <span className="font-logo font-bold text-3xl sm:text-base sm:leading-5 text-[##212328]">
            {sectionName}
          </span>
        </div>
        {/* <div className="flex gap-1">
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
        </div> */}
      </div>

      {/* Special Cards Row */}
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar shrink-0"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SpecialCard
            key={index + 1}
            cardName="أيفون"
            imgSrc="https://s3-alpha-sig.figma.com/img/09bc/4dc7/ce55cdb5f3a19a01e7feb945bc56e978?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNXmT9b7UBX2uSscBuinzxKbrnpMiXRN4AGdq5IlIxhBOv73Zc7ANZldoWH4lFh3mGYJ7c6tl77w2yeE~4rjZL8477Z9F4Uiu~chGBtWqUwZRh5LPmQ2gNkGMrH-X3atR2j9py9dOVkcoXSQ4Genl3-KVCi1QtU7uF56uUzJxPvAsqYaH7X9sQBzU459Rrclqr0tf4K3dpzMkdqv8Jh2eHyXyhV5jp0JJcLl4LNzL-nreMgAKjUjBW1qtuKfk8qPsDF7v9RQDYx7OTHRx1AxIdGCcWTYdP7x3Cl2Q7XN1A2ZTVeS2~sLHfQB4rqqS-x-55DQZIpAOBjpgOwq~emeTg__"
            imgAlt="ipone"
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialRow;
