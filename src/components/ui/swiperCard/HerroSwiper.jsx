// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./heroSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import productImage from "../../../assets/section-image/headphone-header.webp";

function HerroSwiper() {
  const navigate = useNavigate();
  return (
    <div dir="rtl" className="my-6">
      <>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[1400px] sm:w-[328px] sm:h-[177px]  h-[700px]  flex gap-2  sm:justify-between  bg-[#F8F9FF] rounded-2xl px-8 sm:px-3">
              <div className="flex flex-col items-start justify-center ">
                <div className=" flex gap-[5px] items-center">
                  <div className="w-5 sm:w-3 h-5 sm:h-3 rounded-full bg-primary text-white flex justify-center items-center">
                    <FaStar />
                  </div>
                  <div className="font-bold font-fm text-base sm:text-xs text-primary">
                    من افضل منتجات هذا الشهر
                  </div>
                </div>
                <span className="font-fm font-bold text-[50px] sm:text-base sm:leading-6 text-[#212328] leading-[74px] max-w-[500px] mt-2 my-6 sm:my-1">
                  تشكيلة من سماعات الرأس اللاسلكية للالعاب
                </span>
                <span className="max-w-[500] font-fm text-lg text-[#797878] sm:hidden">
                  تمتع بافضل تشكيلة جديدة وحصريه من سماعات الرأس اللاسلكية
                  للالعاب. عروض وخصومات في انتظارك
                </span>
                <button
                  onClick={() => navigate("/products")}
                  className="mt-6 sm:mt-3 font-fm font-bold text-lg sm:text-xs text-white px-6 sm:px-2 py-3 sm:py-1 bg-primary rounded-lg sm:rounded-[23px]"
                >
                  أطلب الان
                </button>
              </div>
              <div className="w-[50%]">
                <img
                  src={productImage}
                  alt="Product Image"
                  className="max-w-full max-h-full sm:w-[168px] sm:h-[158px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1400px] h-[700px] flex items-center justify-center bg-[#F8F9FF]">
              <span className="font-bold font-fb text-[100px] sm:text-[40px]">
                2
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1400px] h-[700px] flex items-center justify-center bg-[#F8F9FF]">
              <span className="font-bold font-fb text-[100px] sm:text-[40px]">
                3
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1400px] h-[700px] flex items-center justify-center bg-[#F8F9FF]">
              <span className="font-bold font-fb text-[100px] sm:text-[40px] ">
                4
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default HerroSwiper;
