import AddReviews from "../reviews/AddReviews";

function WriteComment() {
  return (
    <div>
      <div className="h-9 flex items-center gap-2">
        <span className="w-2 h-full bg-primary rounded-lg"></span>
        <span className="font-logo font-bold text-3xl text-[##212328]">
          تقييمات عملائنا
        </span>
      </div>
      <p className="w-[380px] pl-10 py-4 text-lg font-fr font-normal text-[#787878]">
        بعض من تقيمات عملائنا عن هذا المنتج. اطلب الان واكتب تقييمك
      </p>
      <button className="font-bold font-fb text-lg text-white bg-primary rounded-[39px] px-6 py-3">
        <AddReviews />
      </button>
    </div>
  );
}

export default WriteComment;
