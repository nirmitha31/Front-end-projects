import React from "react";
import VideoPlayer from "../../../common/VideoPlayer";
import logo from "../../../../assets/watch.png";
import video from "../../../../assets/video/Introducing_iPhone_17_Pro_Apple_720p.mp4";

function PromoVideo() {
  return (
    <>
      <VideoPlayer src={video} poster={logo} />
    </>
  );
}

export default PromoVideo;
