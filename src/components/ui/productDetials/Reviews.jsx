import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CommentCard from "./CommentCard";

function Reviews() {
  return (
    <div className="mt-4 mb-16">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <CommentCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <CommentCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <CommentCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Reviews;
