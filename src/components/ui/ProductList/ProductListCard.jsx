import { FaStar } from "react-icons/fa";
import productImage from "../../../assets/products_images/iphone.png";
import shoppingCardIcon from "../../../assets/icons/shopping-cart-big.svg";
import { Link } from "react-router-dom";

function ProductListCard() {
  return (
    <div className="w-[342px] sm:w-[159px]  h-fit sm:h-[235px] p-4 sm:p-1 rounded-xl prodcuctList-card-shadow relative mb-3 bg-white">
      <div className=" bg-[#3074F0] sm:w-[23px] sm:h-[21px] py-1 px-1.5 absolute left-7  sm:left-3 bottom-36 sm:bottom-24  rounded-md hover:cursor-pointer">
        <img src={shoppingCardIcon} alt="shopping cart icon" />
      </div>
      <Link to="/product">
        <img
          className="max-w-[260px] sm:max-w-[150px] max-h-[360px] sm:max-h-[144px]   mx-auto"
          src={productImage}
          alt=""
        />
      </Link>

      <div>
        <span className="font-normal text-[22px] leading-[30px] sm:text-xs sm:leading-3 font-logo text-[#454545]">
          سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.
        </span>
        <div className="flex items-center justify-between mt-4 sm:mt-1">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-[26px] leading-[36px] sm:text-sm sm:leading-5 text-[#E02954]">
              6500ج
            </span>
            <span className="font-normal text-[22px] leading-7 sm:text-xs sm:leading-4 text-[#808080] line-through">
              7000
            </span>
          </div>
          <div className="flex gap-1 items-center text-[22px] leading-7 sm:text-xs sm:leading-4">
            <span>4.2/5</span>
            <FaStar className="text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListCard;
