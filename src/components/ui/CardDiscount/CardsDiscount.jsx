import { FaStar } from "react-icons/fa";
import productImage from "../../../assets/products_images/iphone.png";
import shoppingCardIcon from "../../../assets/icons/shopping-cart-icon.svg";
import { Link, useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import image from "../../../assets/products_images/iphone.png";
import { GoTrash } from "react-icons/go";

function CardsDiscount({ discountPercentage }) {
  const navigate = useNavigate();
  return (
    <div className="w-64 sm:w-[168px] h-[375px] sm:h-fit p-3 rounded-xl product-card-shadow  relative mb-3 shrink-0 ">
      {discountPercentage ? (
        <span className="flex items-center font-medium text-sm sm:text-[10px] rounded-xl  py-1 sm:py-0 px-3 sm:px-1  bg-[#FF2828] font-fm text-[#FFFFFF]  absolute top-4 sm:top-2 right-4">
          خصم {discountPercentage} %
        </span>
      ) : (
        ""
      )}
      <div className="absolute left-3 sm:left-6 bottom-32 sm:bottom-16">
        <Sheet dir="rtl">
          <SheetTrigger>
            <div className="text-[#FFFFFF] sm:w-6 sm:h-6 w-[36px] h-[34px]">
              <img
                src={shoppingCardIcon}
                alt="shopping cart icon"
                className=" hover:cursor-pointer py-1 sm:py-[2px] px-1.5 sm:px-[2px] bg-[#3074F0] rounded-md sm:w-6 sm:h-6 w-[36px] h-[34px]"
              />
            </div>
          </SheetTrigger>
          <SheetContent className="w-[500px] sm:w-[360px]">
            <SheetHeader className="flex justify-end">
              <SheetTitle className="flex justify-end items-center gap-1 font-bold font-fb text-3xl sm:text-xl border-b border-[#E5E9F1] py-3">
                <span className="font-normal font-fr text-base text-[#252534]">
                  (1)
                </span>
                <span className="font-bold font-fb text-[26px] sm:text-xl sm:leading-7 leading-9 text-[#252534]">
                  السلة
                </span>
              </SheetTitle>
              <SheetDescription>
                <div
                  dir="rtl"
                  className="flex items-center justify-between  border-b border-[#E5E9F1] py-3"
                >
                  <div className="flex gap-3">
                    <div className="p-1 shadow-card bg-[#F4F4F4] rounded-[14px] w-[106px] h-[106px] sm:w-[85px] sm:h-[85px]">
                      <img
                        className="w-24 sm:[75px] h-24 sm:h-[75px]"
                        src={image}
                        alt="product-image"
                      />
                    </div>
                    <div className="p-1">
                      <div className="font-semibold font-fm text-lg sm:text-sm sm:leading-4 text-[#505255]">
                        آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
                      </div>
                      <div className="flex gap-3 sm:gap-2 mt-4 ">
                        <button className="w-[22px] sm:w-[20px] h-[22px] sm:h-[20px] rounded-full bg-primary text-base text-white flex justify-center items-center">
                          +
                        </button>
                        <span>1</span>
                        <button className="w-[22px] sm:w-[20px] h-[22px] sm:h-[20px] rounded-full bg-[#EDEDED] text-base text-[#A1A1A3] flex justify-center items-center">
                          -
                        </button>
                        <button className=" rounded-full   flex justify-center items-center">
                          <GoTrash size={19} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <span className="font-semibold font-fm text-xl sm:text-base text=[#454545] ">
                      6500ج
                    </span>
                    <span className="font-normal font-fr text-sm sm:text-xs text-[#808080] line-through">
                      7000ج
                    </span>
                  </div>
                </div>
                <div className="border-t border-[#E5E9F1] mb-5">
                  <div className="py-5 flex items-center justify-between font-bold font-fb text-xl sm:text-base text-[#3A4353]">
                    <span>6500ج</span>
                    <span>: إجمالي السلة</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-[228px] sm:w-[159px] h-[48px] sm:h-[49px]  rounded-[61px] sm:rounded-[44px] bg-white text-primary text-xl sm:text-base font-bold font-fb border border-primary">
                      <Link to="/products">متابعة التسوق</Link>
                    </button>
                    <button
                      onClick={() => navigate("/checkout")}
                      className="h-[48px]  sm:h-[49px] w-[228px] sm:w-[159px]  sm:rounded-[44px]  rounded-[61px] bg-primary border sm:text-base  text-xl font-bold font-fb text-white linerBackgound"
                    >
                      إتمام الشراء
                    </button>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Link to="/product">
        <img
          className="max-w-60 sm:max-w-[108px] max-h-64 sm:max-h-[144px] pb-1 mt-2  mx-auto cursor-pointer"
          src={productImage}
          draggable="false"
          alt="product image"
        />
      </Link>

      <div>
        <Link to="/product">
          <h3 className="font-normal text-lg sm:text-xs sm:leading-4 font-fr text-[#454545] mb-2 line-clamp cursor-pointer">
            سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold font-fb text-xl sm:text-xs sm:leading-5 sm:text-[#454545] text-[#E02954]">
              6500ج
            </span>
            <span className="font-normal font-fm text-base sm:text-xs sm:leading-4 text-[#808080] line-through">
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
