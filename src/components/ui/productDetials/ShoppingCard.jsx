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
import { useState } from "react";
import BuyButton from "./BuyButton";

function ShoppingCard() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <Sheet dir="rtl">
      <SheetTrigger>اضف الي السلة</SheetTrigger>
      <SheetContent className="w-[500px] sm:w-[540px]">
        <SheetHeader className="flex justify-end">
          <SheetTitle className="flex justify-end items-center gap-1 font-bold font-fb text-3xl border-b border-[#E5E9F1] py-3">
            <span className="font-normal font-fr text-base text-[#252534]">
              (1)
            </span>
            <span className="font-bold font-fb text-[26px] leading-9 text-[#252534]">
              السلة
            </span>
          </SheetTitle>
          <SheetDescription>
            <div
              dir="rtl"
              className="flex items-center justify-between gap-10 border-b border-[#E5E9F1] py-3"
            >
              <div className="flex ">
                <div className="p-1 shadow-card bg-[#F4F4F4] rounded-[14px] w-fit">
                  <img className="w-24 h-24" src={image} alt="product-image" />
                </div>
                <div className="p-1">
                  <div className=" font-medium font-fm text-xl text-[#505255]">
                    آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
                  </div>
                  <div className="flex gap-3 pr-2">
                    {/* Increase Button */}
                    <button
                      onClick={handleIncrease}
                      className="text-center  rounded-[50%] w-[22px] h-[22px] bg-primary text-white"
                    >
                      +
                    </button>
                    {/* Input Field */}
                    <input
                      type="number"
                      value={quantity}
                      readOnly
                      className="text-center w-6 flex justify-center pr-1"
                    />

                    {/* Decrease Button */}
                    <button
                      onClick={handleDecrease}
                      className="text-center  rounded-full w-[22px] h-[22px] bg-[#EDEDED]"
                    >
                      -
                    </button>
                    <button className="text-[#4A4A4A]">
                      <GoTrash />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="font-semibold font-fm text-xl text=[#454545] ">
                  6500ج
                </span>
                <span className="font-normal font-fr text-sm text-[#808080] line-through">
                  7000ج
                </span>
              </div>
            </div>
            <div className="border-t border-[#E5E9F1] mb-5">
              <div className="py-5 flex items-center justify-between font-bold font-fb text-xl text-[#3A4353]">
                <span>6500ج</span>
                <span>إجمالي المبلغ:</span>
              </div>
              <div className="flex gap-3">
                <button className="h-[48px] w-[228px]  rounded-[61px] bg-white border  text-xl font-bold font-fb text-primary linerBackgound">
                  إتمام الشراء
                </button>
                <button className="w-[228px] h-[48px]  rounded-[61px] bg-[#3074F0] text-xl font-bold font-fb text-white linerBackgound">
                  متابعة التسوق
                </button>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ShoppingCard;
