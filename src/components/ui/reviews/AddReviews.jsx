import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiStar } from "react-icons/ci";

function AddReviews() {
  return (
    <Sheet dir="rtl">
      <SheetTrigger> اكتب تقييمك</SheetTrigger>
      <SheetContent className="w-[580px] sm:w-[360px]">
        <SheetHeader className="flex justify-end">
          <SheetTitle className="flex justify-center items-center gap-1 font-bold font-fb text-3xl py-3">
            <div className="font-bold font-fb text-[28px] sm:text-lg sm:leading-7 leadding-[41px] text-[#212328] flex justify-center items-center mb-1">
              !اكتب تقييمك
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="font-normal font-fr text-lg sm:text-base text-[#212328]">
                ماهو تقييمك لهذا المنتج؟
              </div>
              <div className="flex gap-4 sm:gap-1">
                <CiStar size={30} /> <CiStar size={30} /> <CiStar size={30} />
                <CiStar size={30} /> <CiStar size={30} />
              </div>
            </div>
            <div dir="rtl" className="flex justify-center items-center">
              <textarea
                className="w-[532px] sm:w-[296px] h-[160px] sm:h-[98px] rounded-lg mt-4 bg-[#F6F6F6] placeholder:p-6 sm:placeholder:p-3  placeholder:font-normal placeholder:font-fr placeholder:text-base placeholder:text-[#858585] resize-none"
                placeholder="اكتب تقييمك عن المنتج..."
              />
            </div>
            <div
              dir="rtl"
              className="flex flex-col sm:mt-2 sm:mr-2 justify-center items-center"
            >
              <label className="font-medium font-fm text-lg sm:text-base text-[#333333] w-full">
                الأسم الكامل
              </label>
              <input
                className="p-[26px] sm:p-4 rounded-lg sm:w-[296px] border border-[#DEDEDE] placeholder:text-sm placeholder:text-[#A8A8AA]"
                placeholder="ادخل اسمك بالكامل"
              />
            </div>
            <div className="flex justify-center items-center">
              <button className=" mx-auto bg-primary text-white font-bold font-fb text-lg sm:text-base rounded-[39px] w-[530px] sm:w-[296px] h-[59px] sm:h-[43px] my-8 bottom-shadow">
                إرسال التقييم
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default AddReviews;
