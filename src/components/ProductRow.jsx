import CardsDiscount from "./ui/CardDiscount/CardsDiscount";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import arrowIcon from "../../src/assets/icons/Arrow 4.svg";

const ProductRow = ({ sectionName, discountPeriod, discountPercentage }) => {
  return (
    <div dir="rtl" className="relative w-full mb-14 sm:mb-7">
      {/* Pagination Buttons */}
      <div className="flex justify-between items-center my-6 sm:my-3">
        <div className="h-9 flex items-center sm:flex-col gap-4 sm:gap-2">
          <div className="h-9 flex items-center gap-2">
            <span className="w-2 h-9 sm:h-6 sm:w-1 bg-primary rounded-lg"></span>
            <span className="font-fm font-bold text-3xl sm:text-lg sm:leading-6 text-[##212328]">
              {sectionName}
            </span>
          </div>
          {discountPeriod ? (
            <CountdownTimer initialHours={discountPeriod} />
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2 items-end">
          <Link className="font-normal text-lg sm:text-sm sm:leading-5 text-[#3074F0] leading-[25px] underline">
            عرض المزيد
          </Link>
          <img src={arrowIcon} alt="Arrow" />
        </div>
      </div>

      {/* Product Cards Row */}
      <div className="flex justify-between gap-4 overflow-x-auto hide-scrollbar">
        <CardsDiscount discountPercentage={discountPercentage} />
        <CardsDiscount discountPercentage={discountPercentage} />
        <CardsDiscount discountPercentage={discountPercentage} />
        <CardsDiscount discountPercentage={discountPercentage} />
        <CardsDiscount discountPercentage={discountPercentage} />
      </div>
    </div>
  );
};

export default ProductRow;
