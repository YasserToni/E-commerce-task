import AddReviews from "../reviews/AddReviews";

function WriteComment() {
  return (
    <div>
      <div className="h-9 sm:h-[29px] flex items-center gap-2">
        <span className="w-2 sm:w-1 h-full bg-primary rounded-lg"></span>
        <span className="font-logo font-bold text-3xl sm:text-lg text-[##212328]">
          تقييمات عملائنا
        </span>
      </div>
      <p className="w-[380px] sm:w-[304px] pl-10 smpl-5 py-4 sm:py-2 text-lg sm:text-sm font-fr font-normal text-[#787878]">
        بعض من تقيمات عملائنا عن هذا المنتج. اطلب الان واكتب تقييمك
      </p>
      <button className="flex items-center justify-center font-bold font-fb text-lg sm:text-sm  text-white bg-primary rounded-[39px] w-[149px] sm:w-[95px] h-[48px] sm:h-[31px] ">
        <AddReviews />
      </button>
    </div>
  );
}

export default WriteComment;
