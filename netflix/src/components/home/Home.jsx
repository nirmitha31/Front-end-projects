import React from "react";
import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import Row from "./row/Row";
import { sampleMovies } from "../../response/movies";
import HeroSlider from "./hero-slider/HeroSlider";

function Home() {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      <Navbar />
      <HeroSlider movies={sampleMovies.slice(3, 8)} />

      <Row title="Recently viewed" movies={sampleMovies} isLarge />
      <Row title="Cult classics" movies={sampleMovies} isLarge />

      <Row title="Oscar Winning" movies={sampleMovies} isLarge />
      <Row title="Most viewed" movies={sampleMovies} isLarge />
    </div>
  );
}

export default Home;
