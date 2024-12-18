import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import image from "../../../assets/products_images/iphone.png";
import logo from "../../../assets/icons/yelp 1.png";
import { GoTrash } from "react-icons/go";
import { useState } from "react";
import cardIcon from "../../../assets/icons/shopping-cart.svg";
import searchIcon from "../../../assets/icons/search-normal.svg";
import "./header.css";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      dir="rtl"
      className="flex justify-between items-center border-b sm:border-y-0 py-2 px-14 sm:px-4 font-fm w-full h-[103px] sm:h-[50px]"
    >
      <nav className=" flex justify-between items-center gap-3 sm:gap-1 relative">
        <ul
          className={`${
            toggleMenu ? "hidden" : "flex"
          } absolute top-8 right-0 w-[330px] rounded-lg h-[210px] bg-[#FFF] z-20  flex-col justify-center gap-3 p-4 font-fm font-medium text-base `}
        >
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            <NavLink to="/">الصفحة الرئيسية</NavLink>
          </li>
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            <NavLink to="/products">منتجاتنا</NavLink>
          </li>
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            <NavLink to="/aboutus">معلومات عنا</NavLink>
          </li>
          <li className="hover:border-b border-[#2a2a3063] hover:text-primary hover:font-semibold">
            <NavLink to="/contactus">تواصل معنا</NavLink>
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
          <NavLink to="/products">منتجاتنا</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">معلومات عنا</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">تواصل معنا</NavLink>
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
          <SheetContent className="w-[500px] sm:w-[360px]">
            <SheetHeader className="flex justify-end">
              <SheetTitle className="flex justify-end items-center gap-1 font-bold font-fb text-3xl sm:text-xl border-b border-[#E5E9F1] py-3">
                <span className="font-normal font-fr text-base text-[#252534]">
                  (1)
                </span>
                <span className="font-bold font-fb text-[26px] sm:text-xl sm:leading-7 leading-9 text-[#252534]">
                  السلة
                </span>
              </SheetTitle>
              <SheetDescription>
                <div
                  dir="rtl"
                  className="flex items-center justify-between  border-b border-[#E5E9F1] py-3"
                >
                  <div className="flex gap-3">
                    <div className="p-1 shadow-card bg-[#F4F4F4] rounded-[14px] w-[106px] h-[106px] sm:w-[85px] sm:h-[85px]">
                      <img
                        className="w-24 sm:[75px] h-24 sm:h-[75px]"
                        src={image}
                        alt="product-image"
                      />
                    </div>
                    <div className="p-1">
                      <div className="font-semibold font-fm text-lg sm:text-sm sm:leading-4 text-[#505255]">
                        آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
                      </div>
                      <div className="flex gap-3 sm:gap-2 mt-4 ">
                        <button className="w-[22px] sm:w-[20px] h-[22px] sm:h-[20px] rounded-full bg-primary text-base text-white flex justify-center items-center">
                          +
                        </button>
                        <span>1</span>
                        <button className="w-[22px] sm:w-[20px] h-[22px] sm:h-[20px] rounded-full bg-[#EDEDED] text-base text-[#A1A1A3] flex justify-center items-center">
                          -
                        </button>
                        <button className=" rounded-full   flex justify-center items-center">
                          <GoTrash size={19} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <span className="font-semibold font-fm text-xl sm:text-base text=[#454545] ">
                      6500ج
                    </span>
                    <span className="font-normal font-fr text-sm sm:text-xs text-[#808080] line-through">
                      7000ج
                    </span>
                  </div>
                </div>
                <div className="border-t border-[#E5E9F1] mb-5">
                  <div className="py-5 flex items-center justify-between font-bold font-fb text-xl sm:text-base text-[#3A4353]">
                    <span>6500ج</span>
                    <span>: إجمالي السلة</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-[228px] sm:w-[159px] h-[48px] sm:h-[49px]  rounded-[61px] sm:rounded-[44px] bg-white text-primary text-xl sm:text-base font-bold font-fb border border-primary">
                      <Link to="/products">متابعة التسوق</Link>
                    </button>
                    <button
                      onClick={() => navigate("/checkout")}
                      className="h-[48px]  sm:h-[49px] w-[228px] sm:w-[159px]  sm:rounded-[44px]  rounded-[61px] bg-primary border sm:text-base  text-xl font-bold font-fb text-white linerBackgound"
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
