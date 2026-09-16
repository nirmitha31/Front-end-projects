import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Player from "./components/home/player/Player";
import { sampleMovies } from "./response/movies";

function App() {
  return (
    <BrowserRouter>
      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/player/:id" element={<Player movies={sampleMovies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
