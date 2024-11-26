import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ShoppingCard from "./ShoppingCard";
function AddToCard() {
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
    <div
      dir="rtl"
      className="flex items-center gap-4 sm:gap-2 mb-7 w-[584px] sm:w-[305px]"
    >
      {/* Add to Cart Button */}
      <button className="flex justify-center items-center gap-2 rounded-[61px] font-bold font-fb text-lg sm:text-base shrink-0 bg-black text-white h-[49px] sm:h-[32px] sm:w-[201px] w-[360px] ">
        <AiOutlineShoppingCart size={25} />
        <ShoppingCard />
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
