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

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

function SwiperCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const image =
    "https://s3-alpha-sig.figma.com/img/09bc/4dc7/ce55cdb5f3a19a01e7feb945bc56e978?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=go0UH-Ncqlwf0AFQnV4xr3tBgm2~JY0pjg24zV6JlOIojApADbf1ta4JNl3Ii3podCbhMB7FYaa31OelD4jBdhw7rSSKt3b5bkGjZLhCB2RqHnQxLgQxUd4ArEQbMULresfBwc~Bl-fLPigdxKqwxD3z9vfCiXAFJDLrMNTB4gCs5cfl00JBN77goOMH4uca78aMWN3buiIm4wYpG7ubnloA2zNijseofye75jQB8d749hI3he5cRLnZg4PVoP3dvvsP8Ps~NTTP3NY7BQsBvL3SeIQFLfC7AM4hbAgGWpW9VUT7aCtXnUAqxFSxLnQuQCJmtAwG~d7MaQPHZS1Y3g__";
  return (
    <>
      <div className="w-[695px]  h-[779px] ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          grabCursor={true}
          pagination={true}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Pagination, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} />
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
          <SwiperSlide className="p-2">
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
