import { RiMenu3Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import image from "../../../assets/products_images/iphone.png";
import logo from "../../../../public/logg.jpg";
import { GoTrash } from "react-icons/go";
import { useState } from "react";
import cardIcon from "../../../assets/icons/shopping-cart.svg";
import searchIcon from "../../../assets/icons/search-normal.svg";
import "./header.css";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const navigate = useNavigate();
  console.log(toggleMenu);
  return (
    <div
      dir="rtl"
      className="flex justify-between items-center border-b sm:border-y-0 py-2 px-14 sm:px-4 font-logo w-full h-[103px] sm:h-[50px]"
    >
      <nav className=" flex justify-between items-center gap-3 sm:gap-1 relative">
        <ul
          className={`${
            toggleMenu ? "hidden" : "flex"
          } absolute top-8 right-0 w-[330px] rounded-lg h-[200px] bg-[#eeeeee] z-20  flex-col justify-center gap-3 p-4 font-fm font-medium text-lg `}
        >
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            الصفحة الرئيسية
          </li>
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            منتجاتنا
          </li>
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            معلومات عنا
          </li>
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            تواصل معنا
          </li>
        </ul>
        <span
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
          className="hidden sm:block sm:text-lg dropIcon cur"
        >
          <RiMenu3Fill />
        </span>
        <img src={logo} alt="Logo" className="w-10  h-10 sm:w-6 sm:h-6" />
        <span className="font-bold text-3xl sm:text-base sm:leading-7 leading-10">
          تسوق
        </span>
      </nav>
      <ul className="flex justify-between  gap-14 sm:hidden">
        <li>
          <NavLink to="/">الصفحة الرئيسية </NavLink>
        </li>
        <li>
          <NavLink to="/product-list">منتجاتنا</NavLink>
        </li>
        <li>
          <a href="#">معلومات عنا</a>
        </li>
        <li>
          <a href="#">تواصل معنا</a>
        </li>
      </ul>
      <div className="flex justify-between gap-8 sm:gap-4">
        <div className="w-6 h-6">
          <img src={searchIcon} alt="Card_cion" />
        </div>
        <Sheet dir="rtl">
          <SheetTrigger>
            <div>
              <img src={cardIcon} alt="Card_cion" />
            </div>
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
                    <button
                      onClick={() => navigate("/order")}
                      className="h-[48px] w-[228px]  rounded-[61px] bg-primary border  text-xl font-bold font-fb text-white linerBackgound"
                    >
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
