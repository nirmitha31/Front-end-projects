import React from "react";
import { movieData } from "../jun-19/movie";
import MovieCard from "../jun-19/MovieCard";
import Header from "../jun-19/Header";
import Footer from "../jun-19/Footer";

export default function Movies() {
  return (
    <>
      <Header />
      <div className="movie-list">
        {movieData.map((movie) => (
          <MovieCard movieData={movie} />
        ))}
      </div>
      <Footer />
    </>
  );
}
