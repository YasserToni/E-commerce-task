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
    </div>
  );
}

export default Reviews;
