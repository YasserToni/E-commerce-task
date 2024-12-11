import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/products_images/iphone.png";
import { GoTrash } from "react-icons/go";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function AddToCard() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div
      dir="rtl"
      className="flex items-center gap-4 sm:gap-2 mt-8 mb-8 sm:mb-4 sm:mt-6 w-[584px] sm:w-[305px]"
    >
      {/* Add to Cart Button */}
      <button className="flex justify-center items-center gap-2 rounded-[61px] font-bold font-fb text-lg sm:text-base shrink-0 bg-black text-white h-[49px] sm:h-[32px] sm:w-[201px] w-[360px] ">
        <AiOutlineShoppingCart size={25} />
        <Sheet dir="rtl">
          <SheetTrigger>
            <div>أضف الي السلة</div>
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
      </button>
      <div className="flex items-center justify-center">
        {/* Increase Button */}
        <button
          onClick={handleIncrease}
          className="rounded-r-[61px] sm:rounded-l-[0px] py-1 sm:py-0 px-5 sm:px-3 h-[49px]  sm:w-[33px] sm:h-[29px] border-r border-y border-[#ECECEC] text-[#3074F0] text-2xl sm:leading-7"
        >
          +
        </button>
        {/* Input Field */}
        <input
          type="number"
          value={quantity}
          readOnly
          className="text-center border border-[#ECECEC] py-2 w-[91px] h-[49px] sm:max-w-[33px] sm:h-[29px]"
        />

        {/* Decrease Button */}
        <button
          onClick={handleDecrease}
          className="rounded-l-[61px] sm:rounded-r-[0px]  py-1 sm:py-0 px-5 h-[49px] sm:h-[29px]  sm:px-3 border-l border-y border-[#ECECEC] text-2xl sm:leading-7"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default AddToCard;
