import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BsWallet2 } from "react-icons/bs";
import { LuBox } from "react-icons/lu";
import { LuUndo2 } from "react-icons/lu";
import { TfiHeadphone } from "react-icons/tfi";

function PolicyDetials() {
  return (
    <di dir="rtl" className=" shadow-swiper">
      <Accordion
        type="single"
        collapsible
        className="border rounded-3xl border-[#D7D9DB] w-[585px]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex pr-5 pl-10 py-6 hover:no-underline  font-fb text-xl text-[#4A4A4A] ">
            <span className="flex gap-2 items-center font-bold">
              <BsWallet2 />
              سياسة الدفع عند الاستلام
            </span>
          </AccordionTrigger>
          <AccordionContent className="pr-5 pl-20 font-fr font-normal text-base text-[#787878]">
            تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد
            الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد
            التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-6 pr-5 pl-10 hover:no-underline font-normal font-fm text-xl text-[#4A4A4A]">
            <span className="flex gap-3 items-center font-bold">
              <LuBox />
              سياسة الشحن
            </span>
          </AccordionTrigger>
          <AccordionContent className="pr-5 pl-20  font-fr font-normal text-base text-[#787878]">
            تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد
            الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد
            التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="py-6 pr-5 pl-10 hover:no-underline font-normal font-fm text-xl text-[#4A4A4A]">
            <span className="flex gap-3 items-center font-bold">
              <LuUndo2 />
              سياسة الاسترجاع
            </span>
          </AccordionTrigger>
          <AccordionContent className="pr-5 pl-20 font-fr font-normal text-base text-[#787878]">
            تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد
            الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد
            التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 pr-5 pl-10 hover:no-underline font-normal font-fm text-xl text-[#4A4A4A]">
            <span className="flex gap-3 items-center font-bold">
              <TfiHeadphone />
              خدمة العملاء
            </span>
          </AccordionTrigger>
          <AccordionContent className="pr-5 pl-20 font-fr font-normal text-base text-[#787878]">
            تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد
            الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد
            التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </di>
  );
}

export default PolicyDetials;
