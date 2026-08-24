import { Link } from "react-router-dom";
import "./RecommendedMovies.css";

function RecommendedMovies({ movies, currentMovieId }) {
  const recommendedMovies = movies.filter(
    (movie) => movie.id !== currentMovieId,
  );

  return (
    <section className="recommended-section">
      <div className="recommended-header">
        <h2>You might also like</h2>
        <Link to="/">View All ›</Link>
      </div>

      <div className="recommended-slider">
        {recommendedMovies.map((movie) => (
          <Link
            to={`/movie/${movie.id}?name=${movie.title}`}
            className="recommended-card"
            key={movie.id}
          >
            <img src={movie.poster} alt={movie.title} />

            <div className="recommended-rating">
              <span>★</span>
              <p>{movie.rating}</p>
              <small>{movie.language}</small>
            </div>

            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecommendedMovies;
