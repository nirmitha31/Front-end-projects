import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chair from "../jun-24/Chair";
import LikeButton from "../jun-24/LikeButton";
import Movies from "../jul-02/Movies";
import MovieDetails from "../jun-19/MovieDetails";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
