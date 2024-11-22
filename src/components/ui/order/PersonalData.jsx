import Input from "../productDetials/Input";

function PersonalDAta() {
  return (
    <div dir="rtl" className="p-7 box-shadow rounded-3xl w-[660px] mb-5">
      <div className="flex flex-col mb-2">
        <span className="mb-1 font-bold font-fb text-2xl text-[#252534]">
          يرجي إدخال بياناتك الشخصية
        </span>
        <span className="font-medium font-fm text-lg text-[#7D7D7D]">
          قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.
        </span>
      </div>
      <Input />
    </div>
  );
}

export default PersonalDAta;
