import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import image from "../../../assets/products_images/iphone.png";
import { GoTrash } from "react-icons/go";

function Header() {
  return (
    <div
      dir="rtl"
      className="flex justify-between items-center border-b py-2 px-14 font-logo w-full"
    >
      <div className="flex justify-between items-center gap-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/a6d7/8a8f/2501911f1f8921cbd38b239a5a0795b5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV~G6CUfZoHSFkqZS8mpugplNUCxdARCaYAA08dRPhQd9P8zsXvXV21qBqvM30B0GtjGXxCPi1o36UYfXeXwVZpwHWMWfwnsLxHf3JRsQVPx9ar2GnfS0Y7MXdbKVx7KIl8VAdwkMdA8tVOSmJqENrTQ0kFcdWIxYNNbZFn7biQSeRWba1TGgYfL5MSvHAZyup1BdH3iVZWpmzArwM4XeNX4KWiVzi79MmfKc~2J48FzGbPHa7KMXtrGPfx4W92WGmCohBSPwalsCPMraHPJIg-6HQUErj7XQH2Lm1doSKPIlfHHh1d1PN0U02y~ZUxbDeTkdA53QNGqRlL5VeCAJA__"
          alt="Logo"
          className="w-10 h-10 rotate-[240deg]"
        />
        <span className="font-bold text-3xl leading-10">تسوق</span>
      </div>
      <ul className="flex justify-between  gap-14">
        <li className="text-lg font-medium leading-6">
          <Link to="/">الصفحة الرئيسية </Link>
        </li>
        <li className="font-normal">
          <Link to="/product-list">منتجاتنا</Link>
        </li>
        <li>
          <a href="#">معلومات عنا</a>
        </li>
        <li>
          <a href="#">تواصل معنا</a>
        </li>
      </ul>
      <div className="flex justify-between gap-8">
        <CiSearch />
        <Sheet dir="rtl">
          <SheetTrigger>
            <HiOutlineShoppingCart />
          </SheetTrigger>
          <SheetContent className="w-[500px] sm:w-[540px]">
            <SheetHeader className="flex justify-end">
              <SheetTitle className="flex justify-end items-center gap-1 font-bold font-fb text-3xl border-b border-[#E5E9F1] py-3">
                <span className="font-normal font-fr text-base text-[#252534]">
                  (1)
                </span>
                <span className="font-bold font-fb text-[26px] leading-9 text-[#252534]">
                  السلة
                </span>
              </SheetTitle>
              <SheetDescription>
                <div
                  dir="rtl"
                  className="flex items-center justify-between gap-10 border-b border-[#E5E9F1] py-3"
                >
                  <div className="flex gap-3">
                    <div className="p-1 shadow-card bg-[#F4F4F4] rounded-[14px] w-fit">
                      <img
                        className="w-24 h-24"
                        src={image}
                        alt="product-image"
                      />
                    </div>
                    <div className="p-1">
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
                        <button className=" rounded-full   flex justify-center items-center">
                          <GoTrash size={19} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <span className="font-semibold font-fm text-xl text=[#454545] ">
                      6500ج
                    </span>
                    <span className="font-normal font-fr text-sm text-[#808080] line-through">
                      7000ج
                    </span>
                  </div>
                </div>
                <div className="border-t border-[#E5E9F1] mb-5">
                  <div className="py-5 flex items-center justify-between font-bold font-fb text-xl text-[#3A4353]">
                    <span>6500ج</span>
                    <span>: إجمالي السلة</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-[228px] h-[48px]  rounded-[61px] bg-white text-primary text-xl font-bold font-fb border border-primary">
                      متابعة التسوق
                    </button>
                    <button className="h-[48px] w-[228px]  rounded-[61px] bg-primary border  text-xl font-bold font-fb text-white linerBackgound">
                      إتمام الشراء
                    </button>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
