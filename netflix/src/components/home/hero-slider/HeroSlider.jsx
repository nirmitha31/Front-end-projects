import React, { useEffect, useState } from "react";
import "./HeroSlider.css";
import { useNavigate } from "react-router-dom";

function HeroSlider({ movies }) {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const movie = movies[index];

  return (
    <header className="hero">
      {/* Background Image (fallback) */}
      <img
        className="hero__image"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
      />

      {/* 🔥 VIDEO BACKGROUND */}
      <iframe
        className="hero__video"
        src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.trailerKey}&showinfo=0&modestbranding=1`}
        title={movie.title}
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />

      {/* CONTENT */}
      <div className="hero__content">
        <h1>{movie.title}</h1>

        <div className="hero__buttons">
          <button
            className="play"
            onClick={() => navigate(`/player/${movie.id}`)}
          >
            ▶ Play
          </button>
          <button className="list">+ My List</button>
        </div>

        <p className="hero__desc">
          Watch {movie.title} now. Enjoy this blockbuster experience.
        </p>
      </div>

      <div className="fadeBottom" />
    </header>
  );
}

export default HeroSlider;
