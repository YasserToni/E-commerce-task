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
      <SheetContent className="w-[580px]">
        <SheetHeader className="flex justify-end">
          <SheetTitle className="flex justify-center items-center gap-1 font-bold font-fb text-3xl py-3">
            <div className="font-bold font-fb text-[28px] leadding-[41px] text-[#212328] flex justify-center items-center mb-1">
              !اكتب تقييمك
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="font-normal font-fr text-lg text-[#212328]">
                ماهو تقييمك لهذا المنتج؟
              </div>
              <div className="flex gap-4">
                <CiStar size={30} /> <CiStar size={30} /> <CiStar size={30} />
                <CiStar size={30} /> <CiStar size={30} />
              </div>
            </div>
            <div dir="rtl">
              <textarea
                className="w-[532px] h-[160px] rounded-lg mt-4 bg-[#F6F6F6] placeholder:p-6 placeholder:font-normal placeholder:font-fr placeholder:text-base placeholder:text-[#858585] resize-none"
                placeholder="اكتب تقييمك عن المنتج..."
              />
              <button></button>
            </div>
            <div dir="rtl" className="flex flex-col">
              <label className="font-medium font-fm text-lg text-[#333333]">
                الأسم الكامل
              </label>
              <input
                className="p-[26px] rounded-lg border border-[#DEDEDE] placeholder:text-sm placeholder:text-[#A8A8AA]"
                placeholder="ادخل اسمك بالكامل"
              />
            </div>
            <button className="bg-primary text-white font-bold font-fb text-lg rounded-[39px] w-[530px] h-[59px] my-8 bottom-shadow">
              إرسال التقييم
            </button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default AddReviews;
