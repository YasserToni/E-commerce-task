import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../../../public/logg.jpg";

function Footer() {
  return (
    <>
      <footer
        dir="rtl"
        className="flex justify-between sm:flex-wrap gap-48 sm:gap-8 bg-[#141D2E] pt-10 pb-40 sm:pb-25 px-14 sm:px-4"
      >
        <div>
          <div className="flex items-center gap-3 sm:gap-1">
            <img
              src="https://s3-alpha-sig.figma.com/img/a6d7/8a8f/2501911f1f8921cbd38b239a5a0795b5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iNkGEnT3wQA8kCaQ9YdqKEkX~SxFaAHXOZRMAQ1Zlau0ZNNENIpOEXiPHMieo9wwojnea5tCmjUr6PsBlMuYodNubjFIUrF6EG8i1N5319LL2G5eO-Id91DKu2vyXHQWCvYkIlYdJAvMHfeU~OLGiaGSrmv9b-Z70kX-Ah0XlbJgUyW4ij7sVkqJ0p4eU6NO80V5OGk3iJy7~Tl5-vl98VBY4vB2c-Uz4OWpZu1g5ydTf1kUHyZPYLKcWmEQ92X~Nsc0xvXRQRn1iXuqFQYzdZQcxeA0UtB~BOL1GI4FfoUlk5REWv4ZSFmNW1ghAr-RVhq~5VRd4R1aC7vcdZ50nQ__"
              alt="Logo"
              className="w-10 h-10 sm:w-[30px] sm:h-[30px] rotate-[240deg]"
            />
            <span className="leading-10 ont-logo font-bold text-3xl sm:text-[21px] sm:leading-[31px] text-[#FFF]">
              تسوق
            </span>
          </div>
          <p className="font-fm font-normal text-xl sm:text-base text-[#FFF] block my-8 sm:my-4">
            منتجات إلكترونية أنيقة ذات جودة ممتازة تناسب كل فرد من أفراد الأسرة.
            وبأسعار جد معقولة
          </p>
          <div className="flex gap-3">
            <FaLinkedin className="rounded-md p-1.5 text-[#fff] w-8 h-8 bg-[#383737]" />
            <FaTwitter className="rounded-md p-1.5 text-[#fff] w-8 h-8 bg-[#383737]" />
            <FaInstagram className="rounded-md p-1.5 text-[#fff] w-8 h-8 bg-[#383737]" />
            <FaFacebookF className="rounded-md p-1.5 text-[#fff] w-8 h-8 bg-[#383737]" />
          </div>
        </div>
        <div className="flex flex-col justify-between sm:gap-4">
          <h1 className="font-fm font-medium text-2xl sm:text-lg text-[#fff]">
            تواصلوا معنا
          </h1>
          <div>
            <h5 className=" font-fm font-normal text-xl sm:text-base text-[#fff]">
              <IoMailOutline className="text-[#EEE] inline text-4xl pl-3" />
              البريد الإلكتروني
            </h5>
            <h5 className="block font-normal text-lg text-[#fff]">
              tasawaqonline@gmail.com
            </h5>
          </div>
          <div>
            <h5 className="font-fm font-normal text-xl sm:text-base text-[#fff]">
              <FiPhoneCall className="text-[#EEE] inline text-4xl sm:text-3xl pl-3" />
              اتصل بنا
            </h5>
            <h5 className="font-fm font-normal text-base text-[#fff]">
              + 966 5643 56688
            </h5>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl sm:text-base font-fm text-[#FFFFFF] mb-4">
            اشترك معنا ليصلك اخر العروض والخصومات والحصول عليي خصم 15%
          </h2>
          <div className="flex gap-3 ">
            <input
              className="pt-1 pb-3 w-[360px] h-[49px] sm:w-[244px] sm:h-[33px] placeholder:px-4 rounded-3xl"
              type="text"
              placeholder="ادخل بريدك الالكتروني"
            />
            <button className=" flex justify-center items-center bg-[#3074F0] text-[#FFF] font-fm font-bold text-base w-[114px] sm:w-[76px] h-[49px] sm:h-[33px]  rounded-3xl ">
              اشترك
            </button>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center font-fm font-normal text-base p-5 border-t border-[#3D3D3D]  text-[#ABABAB] bg-[#141D2E]">
        © 2024 Tasawq. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
