import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { movieData } from "./movie";
import Header from "./Header";
import Cast from "./Cast";
import Review from "./Review";
import SeatBooking from "./SeatBooking";
import CinemaHallSelection from "./CinemaHallSelection";
import Footer from "./Footer";
import RecommendedMovies from "./RecommendedMovies";

function MovieDetails() {
  const { id } = useParams();

  const [showCinemaSelection, setShowCinemaSelection] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPlayTrailer(false);
  }, [id]);

  const movie = movieData.find((item) => item.id === Number(id));

  if (!movie) {
    return <h1 className="not-found">Movie not found</h1>;
  }

  function handleBookTickets() {
    setPlayTrailer(false);
    setShowCinemaSelection(true);

    setTimeout(() => {
      document
        .querySelector(".cinema-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleWatchTrailer() {
    setPlayTrailer(true);

    setTimeout(() => {
      document
        .querySelector(".leo-gallery-section")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }

  function handleShowSelect(show) {
    setSelectedShow(show);

    setTimeout(() => {
      document
        .querySelector(".seat-booking-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleCloseCinema() {
    setShowCinemaSelection(false);
    setSelectedShow(null);
    setPlayTrailer(false);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />

      <div className="movie-details-page">
        <div className="details-card">
          <div className="left-section">
            <img className="poster" src={movie.poster} alt={movie.title} />
          </div>

          <div className="right-section">
            <h1>{movie.title}</h1>

            <div className="movie-meta">
              <span>⭐ {movie.rating}/10</span>
              <span>{movie.language}</span>
              <span>{movie.genre}</span>
            </div>

            <p className="description">
              Experience this blockbuster movie on the big screen with
              breathtaking visuals, powerful performances, emotional
              storytelling and spectacular action sequences.
            </p>

            <div className="movie-info-grid">
              <div className="info-card">
                <h4>Duration</h4>
                <p>2h 45m</p>
              </div>

              <div className="info-card">
                <h4>Release</h4>
                <p>2025</p>
              </div>

              <div className="info-card">
                <h4>IMDb</h4>
                <p>{movie.rating}/10</p>
              </div>

              <div className="info-card">
                <h4>Language</h4>
                <p>{movie.language}</p>
              </div>

              <div className="info-card">
                <h4>Genre Movie</h4>
                <p>{movie.genre}</p>
              </div>

              <div className="info-card">
                <h4>Format</h4>
                <p>2D • IMAX</p>
              </div>
            </div>

            <div className="button-group">
              <button className="book-btn" onClick={handleBookTickets}>
                {movie.buttonText}
              </button>

              <button className="trailer-btn" onClick={handleWatchTrailer}>
                ▶ Watch Trailer
              </button>
            </div>
          </div>
        </div>

        {showCinemaSelection && (
          <CinemaHallSelection
            movie={movie}
            selectedShow={selectedShow}
            onShowSelect={handleShowSelect}
            onClose={handleCloseCinema}
          />
        )}

        {selectedShow && (
          <SeatBooking movie={movie} selectedShow={selectedShow} />
        )}

        <Cast movie={movie} />

        <Review movie={movie} />

        <section className="leo-gallery-section">
          <h2>{movie.title} Visuals</h2>

          <div className="cinema-screen-wrapper">
            <div
              className={`glass-image-box trailer-hover-box cinema-screen ${
                playTrailer ? "play-trailer" : ""
              }`}
            >
              <img
                className="gallery-image"
                src={movie.galleryImage}
                alt={`${movie.title} Gallery`}
              />

              <iframe
                className="trailer-video"
                src={movie.trailerUrl}
                title={`${movie.title} Trailer`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <RecommendedMovies movies={movieData} currentMovieId={movie.id} />
      </div>

      <Footer />
    </>
  );
}

export default MovieDetails;
