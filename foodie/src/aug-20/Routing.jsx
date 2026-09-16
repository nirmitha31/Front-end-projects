import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import FoodDetails from "./FoodDetails";
import RestaurantDetails from "../aug-14/RestaurantDetails";
import ScrollToTop from "../ScrollToTop";

function Routing() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
