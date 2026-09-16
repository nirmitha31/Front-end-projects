import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg)",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Stranger Things</h1>

        <div className="banner__buttons">
          <button className="btn">▶ Play</button>
          <button className="btn">+ My List</button>
        </div>

        <p className="banner__desc">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments and supernatural forces.
        </p>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
