import productImg from "../../../assets/products_images/iphone.png";
function Card() {
  return (
    <div className="flex gap-12 items-center justify-between">
      <div className="flex items-center gap-7">
        <div className="flex gap-2 w-[113px] h-[113px] p-2 shadow-card bg-[#F4F4F4] rounded-lg my-6">
          <img src={productImg} alt="product-image" />
        </div>
        <div>
          <div className="font-semibold font-fm text-lg text-[#505255]">
            آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
          </div>
          <div className="flex gap-3 mt-4">
            <button className="w-[22px] h-[22px] rounded-full bg-primary text-base text-white flex justify-center items-center">
              +
            </button>
            <span>1</span>
            <button className="w-[22px] h-[22px] rounded-full bg-[#EDEDED] text-base text-[#A1A1A3] flex justify-center items-center">
              -
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <span className="font-bold font-fb text-[22px] text-[#454545]">
          6500ج
        </span>
        <span className="font-normal font-fr text-base text-[#808080] line-through">
          7000
        </span>
      </div>
    </div>
  );
}

export default Card;
