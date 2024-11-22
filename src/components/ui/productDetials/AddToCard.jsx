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
    <div dir="rtl" className="flex items-center gap-4 mb-7">
      {/* Add to Cart Button */}
      <button className="flex items-center justify-center gap-2 py-2 px-28 rounded-[61px] font-bold font-fb text-lg bg-black text-white max-w-[360px] ">
        <AiOutlineShoppingCart size={25} />
        <ShoppingCard />
      </button>
      <div className="flex items-center justify-center">
        {/* Increase Button */}
        <button
          onClick={handleIncrease}
          className="rounded-r-[61px] py-1 px-5 border-r border-y border-[#ECECEC] text-[#3074F0] text-2xl"
        >
          +
        </button>
        {/* Input Field */}
        <input
          type="number"
          value={quantity}
          readOnly
          className="text-center border border-[#ECECEC] py-2 max-w-[100px]"
        />

        {/* Decrease Button */}
        <button
          onClick={handleDecrease}
          className="rounded-l-[61px] py-1 px-5 border-l border-y border-[#ECECEC] text-2xl"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default AddToCard;
