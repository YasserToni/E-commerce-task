import Input from "../productDetials/Input";

function PersonalDAta() {
  return (
    <div
      dir="rtl"
      className="p-7 sm:p-4 box-shadow rounded-3xl w-[660px] sm:w-[328px] mb-5"
    >
      <div className="flex flex-col mb-2">
        <span className="mb-1 font-bold font-fb text-2xl sm:text-lg sm:leading-6 text-[#252534]">
          يرجي إدخال بياناتك الشخصية
        </span>
        <span className="font-medium font-fm text-lg sm:text-base sm:leading-4 text-[#7D7D7D]">
          قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.
        </span>
      </div>
      <Input />
    </div>
  );
}

export default PersonalDAta;
