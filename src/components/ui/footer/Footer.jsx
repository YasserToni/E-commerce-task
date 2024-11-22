import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer
        dir="rtl"
        className="flex justify-between gap-48 bg-[#141D2E] pt-10 pb-40 px-14"
      >
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/a6d7/8a8f/2501911f1f8921cbd38b239a5a0795b5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV~G6CUfZoHSFkqZS8mpugplNUCxdARCaYAA08dRPhQd9P8zsXvXV21qBqvM30B0GtjGXxCPi1o36UYfXeXwVZpwHWMWfwnsLxHf3JRsQVPx9ar2GnfS0Y7MXdbKVx7KIl8VAdwkMdA8tVOSmJqENrTQ0kFcdWIxYNNbZFn7biQSeRWba1TGgYfL5MSvHAZyup1BdH3iVZWpmzArwM4XeNX4KWiVzi79MmfKc~2J48FzGbPHa7KMXtrGPfx4W92WGmCohBSPwalsCPMraHPJIg-6HQUErj7XQH2Lm1doSKPIlfHHh1d1PN0U02y~ZUxbDeTkdA53QNGqRlL5VeCAJA__"
              alt="Logo"
              className="w-10 h-10 rotate-[240deg]"
            />
            <span className="leading-10 ont-logo font-bold text-3xl text-[#FFF]">
              تسوق
            </span>
          </div>
          <p className="font-logo font-normal text-xl text-[#FFF] block my-8">
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
        <div className="flex flex-col justify-between">
          <h1 className="font-logo font-medium text-2xl text-[#fff]">
            تواصلوا معنا
          </h1>
          <div>
            <h5 className=" font-logo font-normal text-xl text-[#fff]">
              <IoMailOutline className="text-[#EEE] inline text-4xl pl-3" />
              البريد الإلكتروني
            </h5>
            <h5 className="block font-normal text-lg text-[#fff]">
              tasawaqonline@gmail.com
            </h5>
          </div>
          <div>
            <h5 className="font-logo font-normal text-xl text-[#fff]">
              <FiPhoneCall className="text-[#EEE] inline text-4xl pl-3" />
              اتصل بنا
            </h5>
            <h5 className="font-logo font-normal text-base text-[#fff]">
              + 966 5643 56688
            </h5>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl font-logo text-[#FFFFFF] mb-4">
            اشترك معنا ليصلك اخر العروض والخصومات والحصول عليي خصم 15%
          </h2>
          <div className="flex  gap-3 ">
            <input
              className="pt-1 pb-3 pr-7 pl-40 rounded-3xl"
              type="text"
              placeholder="ادخل بريدك الالكتروني"
            />
            <button className="bg-[#3074F0] text-[#FFF] font-logo font-bold text-base px-6 py-2 rounded-3xl ">
              اشترك
            </button>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center font-logo font-normal text-base p-5 border-t border-[#3D3D3D]  text-[#ABABAB] bg-[#141D2E]">
        © 2024 Tasawq. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
