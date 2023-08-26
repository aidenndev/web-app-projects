import React from "react";
import "../../styles/background.css";
import backgroundVideo from "../../assets/bg-universe.mp4";
import fallbackImage from "../../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={backgroundVideo} type="video/mp4" source />
      </video>
    </>
  );
};

export default Background;
