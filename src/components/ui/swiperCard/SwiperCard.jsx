import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./swiperCard.css";
import image from "../../../assets/products_images/iphone.png";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

function SwiperCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="w-[695px] sm:w-[328px] sm:h-fit  h-[779px] sticky sm:static top-3">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Pagination, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img className="sm:max-w-[187px] sm:max-h-[264px]" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sm:max-w-[187px] sm:max-h-[264px]" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sm:max-w-[187px] sm:max-h-[264px]" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sm:max-w-[187px] sm:max-h-[264px]" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sm:max-w-[187px] sm:max-h-[264px]" src={image} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="p-2" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="p-2" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="p-2" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="p-2" src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="p-2" src={image} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperCard;
