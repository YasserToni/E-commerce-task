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
    <div dir="rtl" className="relative w-full mb-14">
      {/* Pagination Buttons */}
      <div className="flex justify-between my-6">
        <div className="h-9 flex items-center gap-2">
          <span className="w-2 h-full bg-primary rounded-lg"></span>
          <span className="font-logo font-bold text-3xl text-[##212328]">
            {sectionName}
          </span>
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
      <div ref={rowRef} className="flex gap-4 overflow-x-auto hide-scrollbar">
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
