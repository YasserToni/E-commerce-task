import { FaStar } from "react-icons/fa";
import productImage from "../../../assets/products_images/iphone.png";
import shoppingCardIcon from "../../../assets/icons/shopping-cart-icon.svg";
import { Link } from "react-router-dom";

function CardsDiscount({ discountPercentage }) {
  return (
    <div className="w-64 sm:w-[168px] h-96 sm:h-fit p-3 rounded-xl product-card-shadow relative mb-3 cursor-pointer">
      {discountPercentage ? (
        <span className="flex items-center font-medium text-sm sm:text-[10px] rounded-xl  py-1 sm:py-0 px-3 sm:px-1  bg-[#FF2828] font-logo text-[#FFFFFF]  absolute top-10 sm:top-6 right-4">
          خصم {discountPercentage} %
        </span>
      ) : (
        ""
      )}
      <div className="text-[#FFFFFF] sm:w-6 sm:h-6 w-[36px] h-[34px]">
        <img
          src={shoppingCardIcon}
          alt="shopping cart icon"
          className="absolute left-3 sm:left-5  bottom-28 sm:bottom-14 hover:cursor-pointer py-1 px-1.5 bg-[#3074F0] rounded-md sm:w-6 sm:h-6 w-[36px] h-[34px]"
        />
      </div>
      <Link to="/product">
        <img
          className="max-w-60 sm:max-w-[108px] max-h-64 sm:max-h-[144px] pb-1  mx-auto"
          src={productImage}
          alt="product image"
        />
      </Link>

      <div>
        <h3 className="font-normal text-lg sm:text-xs sm:leading-4 font-logo text-[#454545] truncate">
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
  );
}

export default CardsDiscount;
