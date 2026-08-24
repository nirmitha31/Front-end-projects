import React from "react";

import FoodDisplay from "../aug-13/FoodDisplay";
import RestaurantDisplay from "../aug-14/RestaurantDisplay";
import MovieAdvertisement from "../aug-14/MovieAdvertisement";

import "./Home.css";
import HomeHeader from "./HomeHeader";
import HeroSection from "./HeroSection";
import HomeBenefits from "./HomeBenefits";
import FoodVideoSection from "./FoodVideoSection";

function Home() {
  return (
    <div className="home-page">
      {/* =========================
          LEFT SIDE
      ========================= */}

      <main className="home-main">
        {/* HEADER */}
        <HomeHeader />

        {/* HERO */}
        <HeroSection />

        {/* FOOD CATEGORIES */}
        <section className="home-section">
          <div className="home-section-heading">
            <h2>🔥 Popular Categories</h2>

            <button>View all →</button>
          </div>

          <FoodDisplay />
        </section>

        {/* RESTAURANTS */}
        <section className="home-section restaurant-home-section">
          <div className="home-section-heading">
            <h2>📍 Top Restaurants Near You</h2>

            <button>View all →</button>
          </div>

          <RestaurantDisplay />
        </section>

        {/* BENEFITS */}
        <HomeBenefits />
      </main>

      {/* =========================
          RIGHT SIDE
      ========================= */}

      <aside className="advertisement-area">
        {/* MOVIE ADVERTISEMENT */}
        <MovieAdvertisement />

        {/* FOOD VIDEO */}
        <FoodVideoSection />
      </aside>
    </div>
  );
}

export default Home;
