import productImg from "../../../assets/products_images/iphone.png";
function CardForSuccessPage() {
  return (
    <div className="flex gap-12 sm:gap-3 items-center justify-between">
      <div className="flex items-center gap-7 sm:gap-3">
        <div className="flex gap-2 w-[113px] sm:w-[85px]  h-[113px] sm:h-[85px] p-2 sm:p-0 shadow-card bg-[#F4F4F4] rounded-lg my-6">
          <img src={productImg} alt="product-image" />
        </div>
        <div>
          <div className="font-semibold font-fm text-lg sm:text-sm text-[#505255] ">
            آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-col sm:gap-2">
        <span className="font-bold font-fb text-[22px] sm:text-base text-[#454545]">
          6500ج
        </span>
        <span className="font-normal font-fr text-base sm:text-sm text-[#808080] line-through">
          7000
        </span>
      </div>
    </div>
  );
}

export default CardForSuccessPage;
