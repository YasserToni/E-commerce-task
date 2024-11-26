// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import CommentCard from "./CommentCard";
import CommentCard from "./CommentCard";
import "./review.css";

function Reviews({ carouselDirection }) {
  return (
    <div className="mt-4 sm:mt-2 mb-6 sm:mb-3">
      <div className="carousel">
        <div className={`${carouselDirection} flex`}>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
        </div>
      </div>
      {/* <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3 sm:basis-1/1">
            <CommentCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3 sm:basis-1/1">
            <CommentCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3 sm:basis-1/1">
            <CommentCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel> */}
    </div>
  );
}

export default Reviews;
