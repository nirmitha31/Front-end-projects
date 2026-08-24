import { useRef } from "react";
import "./Review.css";

function Review({ movie }) {
  const reviewRef = useRef(null);

  if (!movie.reviews) {
    return null;
  }

  function scrollLeft() {
    reviewRef.current.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    reviewRef.current.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  }

  return (
    <section className="review-section">
      <div className="review-title-row">
        <h2>{movie.title} Reviews</h2>

        <div className="review-buttons">
          <button onClick={scrollLeft}>‹</button>
          <button onClick={scrollRight}>›</button>
        </div>
      </div>

      <div className="review-container" ref={reviewRef}>
        {movie.reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={review.photo} alt={review.name} />

              <div>
                <h3>{review.name}</h3>
                <span>⭐ {review.rating}/5</span>
              </div>
            </div>

            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
