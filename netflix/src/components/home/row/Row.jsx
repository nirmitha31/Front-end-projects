import React, { useState, useRef } from "react";
import "./Row.css";
import { useNavigate } from "react-router-dom";

function Row({ movies, isLargeRow = false, title = "Trending Now" }) {
  const [hoveredId, setHoveredId] = useState(null);
  const hoverTimer = useRef(null);
  const navigate = useNavigate();

  const handleEnter = (id) => {
    hoverTimer.current = setTimeout(() => {
      setHoveredId(id);
    }, 400); // delay like Netflix
  };

  const handleLeave = () => {
    clearTimeout(hoverTimer.current);
    setHoveredId(null);
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__container">
        <div className="row__posters">
          {movies.map((movie) => {
            const isHovered = hoveredId === movie.id;

            return (
              <div
                key={movie.id}
                className={`row__card ${isLargeRow ? "large" : ""} ${
                  isHovered ? "active" : ""
                }`}
                onMouseEnter={() => handleEnter(movie.id)}
                onMouseLeave={handleLeave}
              >
                <div className="row__inner">
                  {/* Poster */}
                  <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="poster"
                  />

                  {/* Trailer */}
                  {isHovered && (
                    <iframe
                      className="row__video"
                      src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.trailerKey}`}
                      title={movie.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}

                  {/* Overlay */}
                  {isHovered && (
                    <div className="row__overlay">
                      <h3>{movie.title}</h3>
                      <div className="row__buttons">
                        <button onClick={() => navigate(`/player/${movie.id}`)}>
                          ▶
                        </button>
                        <button>＋</button>
                        <button>ℹ</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Row;
