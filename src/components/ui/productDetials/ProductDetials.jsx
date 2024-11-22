import { IoIosStar } from "react-icons/io";
function ProductDetials() {
  return (
    <div className="w-[580px]">
      <div className="flex items-center gap-2">
        <span className="flex">
          <IoIosStar className="text-[#FFAF13]" />
          <IoIosStar className="text-[#FFAF13]" />
          <IoIosStar className="text-[#FFAF13]" />
          <IoIosStar className="text-[#FFAF13]" />
          <IoIosStar className="text-[#DBDBDB]" />
        </span>
        <span className="text-[#808080] font-normal font-fr text-lg">
          (بناء علي 45 تقييم)
        </span>
      </div>
      <div className="font-semibold font-fm text-3xl leading-[41px] text-[#454545] pt-3">
        آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق
        FaceTime
      </div>
      <div className="my-4">
        <span className="font-bold font-fb text-3xl text-[#E02954]">6500ج</span>
        <span className="font-normal font-fr text-xl leading-7 text-[#808080] line-through mx-2">
          7000
        </span>
        <span className="font-bold font-fb text-lg leading-6 text-primary bg-[#E0E5FF] py-2 px-3 rounded-lg">
          وفر 1000ج
        </span>
      </div>
      <p className="font-normal font-fr text-lg text-[#787878] w-[500px]">
        آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق
        FaceTime - إصدار الشرق الأوسط
      </p>
    </div>
  );
}

export default ProductDetials;
