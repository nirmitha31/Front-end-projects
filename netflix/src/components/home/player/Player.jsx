import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Player.css";

function Player({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));
  const [showControls, setShowControls] = useState(true);

  if (!movie) return <h2 style={{ color: "white" }}>Movie not found</h2>;

  return (
    <div
      className="player"
      onMouseMove={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* VIDEO */}
      <iframe
        className="player__video"
        src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0`}
        title={movie.title}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* TOP BAR */}
      <div className={`player__top ${showControls ? "show" : ""}`}>
        <button className="back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2 className="player__title">{movie.title}</h2>
      </div>
    </div>
  );
}

export default Player;
