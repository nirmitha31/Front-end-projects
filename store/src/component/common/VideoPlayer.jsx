import React, { useRef } from "react";
import "./common.css";

function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  controls = true,
  loop = false,
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <div
      className="video-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="video-element"
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={true}
        playsInline
      />
    </div>
  );
}

export default VideoPlayer;
