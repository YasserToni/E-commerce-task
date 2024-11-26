import { FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import productImage from "../../../assets/products_images/iphone.png";

function ProductListCard({ discountPercentage }) {
  return (
    <div className="w-[342px] sm:w-[159px]  h-fit sm:h-[235px] p-4 sm:p-1 rounded-xl shadow-card relative mb-3 bg-white">
      <AiOutlineShoppingCart
        // size={32}
        className=" bg-[#3074F0] text-[#FFF] text-[42px] sm:text-[28px] py-1 px-1.5 absolute left-7 sm:left-0 bottom-36 sm:bottom-24  rounded-md hover:cursor-pointer"
      />
      <img
        className="max-w-[260px] sm:max-w-[150px] max-h-[360px] sm:max-h-[144px]   mx-auto"
        src={productImage}
        alt=""
      />

      <div>
        <span className="font-normal text-[22px] leading-[30px] sm:text-xs sm:leading-3 font-logo text-[#454545]">
          سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.
        </span>
        <div className="flex items-center justify-between mt-4 sm:mt-1">
          <div>
            <span className="font-bold text-[26px] leading-[36px] sm:text-sm sm:leading-5 text-[#454545]">
              6500ج
            </span>
            <span className="font-normal text-[22px] leading-7 sm:text-xs sm:leading-4 text-[#808080] line-through">
              7000
            </span>
          </div>
          <div className="flex items-center text-[22px] leading-7 sm:text-xs sm:leading-4">
            4.2/5
            <FaStar className="text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListCard;
