import { Link } from "react-router-dom";

function MovieCard({ movieData }) {
  const { id, poster, title, rating, language, genre } = movieData;

  return (
    <Link to={`/movie/${id}?name=${title}`} className="movie-card-link">
      <div className="movie-card">
        <div className="poster-box">
          <img src={poster} alt={title} />

          <div className="poster-overlay">
            <span>View Details</span>
          </div>
        </div>

        <div className="movie-info">
          <h3>{title}</h3>

          <div className="rating-row">
            <span className="star">★</span>
            <p>{rating}/10</p>
          </div>

          <div className="movie-tags">
            <span>{language}</span>
            <span>{genre}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
