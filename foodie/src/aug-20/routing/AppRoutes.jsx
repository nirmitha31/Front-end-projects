import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckRoute from "./CheckRoute";
import OnlyOnce from "../../aug-19/OnlyOnce";
import Dependency from "../../aug-19/Dependency";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckRoute />} />
        <Route path="/one" element={<OnlyOnce />} />
        <Route path="/two" element={<Dependency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
