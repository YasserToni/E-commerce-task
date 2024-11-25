import { useRef } from "react";
import CardsDiscount from "./ui/CardDiscount/CardsDiscount";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import CountdownTimer from "./CountdownTimer";

const ProductRow = ({ sectionName, discountPeriod, discountPercentage }) => {
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
    <div dir="rtl" className="relative w-full mb-14 sm:mb-7">
      {/* Pagination Buttons */}
      <div className="flex justify-between items-center my-6 sm:my-3">
        <div className="h-9 flex items-center sm:flex-col gap-2">
          <div className="h-9 flex items-center gap-2">
            <span className="w-2 h-9 sm:h-6 sm:w-1 bg-primary rounded-lg"></span>
            <span className="font-logo font-bold text-3xl sm:text-lg sm:leading-6 text-[##212328]">
              {sectionName}
            </span>
          </div>
          {discountPeriod ? (
            <CountdownTimer initialHours={discountPeriod} />
          ) : (
            ""
          )}
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
      <div
        ref={rowRef}
        className="flex gap-4 sm:gap-2 overflow-x-auto hide-scrollbar"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <CardsDiscount
            discountPercentage={discountPercentage}
            key={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
