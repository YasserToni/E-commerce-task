import { FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import productImage from "../../../assets/products_images/iphone.png";

function CardsDiscount({ discountPercentage }) {
  return (
    <div dir="rtl">
      <div className="flex gap-2 items-center ">
        <div className="w-64 sm:w-[168px] h-96 sm:h-[248px] p-2 rounded-xl shadow-card relative mb-3">
          {discountPercentage ? (
            <span className="flex items-center font-medium text-sm sm:text-[10px] rounded-xl  py-1 sm:py-0 px-3 sm:px-1  bg-[#FF2828] font-logo text-[#FFFFFF]  absolute right-4">
              خصم {discountPercentage} %
            </span>
          ) : (
            ""
          )}
          <AiOutlineShoppingCart
            // size={32}
            className=" bg-[#3074F0] text-[#FFF] text-3xl py-1 px-1.5 absolute left-5 sm:left-0 bottom-40 sm:bottom-24  rounded-md hover:cursor-pointer"
          />
          <img
            className="max-w-60 sm:max-w-[108px] max-h-64 sm:max-h-[144px] pb-6  mx-auto"
            src={productImage}
            alt=""
          />

          <div>
            <h3 className="font-normal text-lg sm:text-xs sm:leading-4 font-logo text-[#454545]">
              سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-xl sm:text-sm sm:leading-5 text-[#E02954]">
                  6500ج
                </span>
                <span className="font-normal text-base sm:text-xs sm:leading-4 text-[#808080] line-through">
                  7000
                </span>
              </div>
              <div className="flex items-center sm:text-xs ">
                4.2/5
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsDiscount;
