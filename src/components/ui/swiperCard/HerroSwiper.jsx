// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./heroSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";

function HerroSwiper() {
  return (
    <div dir="rtl" className="my-6">
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="w-[1400px] h-[700px]  flex gap-2 bg-gray-200 rounded-2xl px-8">
              <div className="flex flex-col items-start justify-center w-[50%]">
                <div className=" flex gap-[2px] items-center">
                  <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center">
                    <FaStar />
                  </div>
                  <div className="font-bold font-logo text-base text-primary">
                    من افضل منتجات هذا الشهر
                  </div>
                </div>
                <span className="font-logo font-bold text-[50px] text-[#212328] leading-[74px] max-w-[500px] my-6">
                  تشكيلة من سماعات الرأس اللاسلكية للالعاب
                </span>
                <span className="max-w-[500] font-logo text-lg text-[#797878] max-w-[500px]">
                  تمتع بافضل تشكيلة جديدة وحصريه من سماعات الرأس اللاسلكية
                  للالعاب. عروض وخصومات في انتظارك
                </span>
                <button className="mt-6 font-logo font-bold text-lg text-white px-6 py-3 bg-primary rounded-lg">
                  أطلب الان
                </button>
              </div>
              <div className="w-[50%]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3dbc/dd0d/cc6efa1a0067281fe9035fe59e195021?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9egQXj38T~80NaRwV3mQZV2Q7~NCL3OVhkEM~4su75m5aHujwPgc5ZC82hFWwH-mcJEdLHzKfyLQuNLlWmDHQECusl6m4tvG6KuiHgkV1iLQwTDbs3TwM9gGzntBo1OIz9Y~EL0UFvG0A8ms8iPV1QiPHH74Zzm~T5mXufiHWZjHhMzpWNrnu35ueAqrM6Xn8O5YAPlq5Puy7iV8B7j92xIf4VVK4xCZcrt2qEb-PAjvh0C67NGNQR4YTlmiRhGc1FTJpPOyvVwP~n09Jz-fcPGOmxRVj5F2S0f90hYzyGaQiSsu96Wf20-EHp9rFmeBaYi1H5A8iaYD6PHJD13wQ__"
                  alt="Product Image"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1400px] h-[700px] bg-red-400"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1400px] h-[700px] bg-red-400"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1400px] h-[700px] bg-red-400">
              <img
                src="https://s3-alpha-sig.figma.com/img/3dbc/dd0d/cc6efa1a0067281fe9035fe59e195021?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9egQXj38T~80NaRwV3mQZV2Q7~NCL3OVhkEM~4su75m5aHujwPgc5ZC82hFWwH-mcJEdLHzKfyLQuNLlWmDHQECusl6m4tvG6KuiHgkV1iLQwTDbs3TwM9gGzntBo1OIz9Y~EL0UFvG0A8ms8iPV1QiPHH74Zzm~T5mXufiHWZjHhMzpWNrnu35ueAqrM6Xn8O5YAPlq5Puy7iV8B7j92xIf4VVK4xCZcrt2qEb-PAjvh0C67NGNQR4YTlmiRhGc1FTJpPOyvVwP~n09Jz-fcPGOmxRVj5F2S0f90hYzyGaQiSsu96Wf20-EHp9rFmeBaYi1H5A8iaYD6PHJD13wQ__"
                alt="Product Image"
                className="max-w-full max-h-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default HerroSwiper;
