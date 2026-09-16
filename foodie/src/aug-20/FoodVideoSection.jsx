import React, { useRef } from "react";
import "./FoodVideoSection.css";

function FoodVideoSection() {
  const iframeRef = useRef(null);

  const playVideo = () => {
    if (!iframeRef.current) {
      return;
    }

    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
        args: [],
      }),
      "*",
    );
  };

  const stopVideo = () => {
    if (!iframeRef.current) {
      return;
    }

    // Pause video
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "pauseVideo",
        args: [],
      }),
      "*",
    );

    // Reset video back to beginning
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "seekTo",
        args: [0, true],
      }),
      "*",
    );
  };

  return (
    <div
      className="food-video-card"
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
    >
      {/* YOUTUBE VIDEO */}

      <iframe
        ref={iframeRef}
        className="food-youtube-video"
        src="https://www.youtube.com/embed/L_Sz5yv_Ub0?enablejsapi=1&mute=1&controls=0&rel=0&playsinline=1"
        title="Food Preparation Video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* DARK LAYER */}

      <div className="food-video-overlay"></div>

      {/* TEXT CONTENT */}

      <div className="food-video-content">
        <span className="food-video-label">🔥 BEHIND THE KITCHEN</span>

        <h2>
          See How Your
          <br />
          Food Is Made
        </h2>

        <p>
          Fresh ingredients, expert chefs
          <br />
          and delicious food.
        </p>

        <div className="food-watch-area">
          <div className="food-play-button">▶</div>

          <div>
            <strong>Hover to Watch</strong>

            <span>See our kitchen in action</span>
          </div>
        </div>
      </div>

      {/* HOVER MESSAGE */}

      <div className="video-playing-label">🔴 Kitchen Live</div>
    </div>
  );
}

export default FoodVideoSection;
