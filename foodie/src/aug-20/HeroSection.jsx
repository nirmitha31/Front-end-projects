import React from "react";

function HeroSection() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <p className="hero-welcome">Hello Foodie! 👋</p>

        <h1>
          What are you
          <br />
          <span>craving</span> today?
        </h1>

        <p className="hero-description">
          Discover the best food from top restaurants near you and enjoy fast
          delivery.
        </p>

        <div className="hero-buttons">
          <button className="order-now-button">Order Now</button>

          <button className="explore-button">Explore Food →</button>
        </div>
      </div>

      <div className="hero-image-area">
        <img
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1000"
          alt="Delicious Food"
        />

        <div className="hero-delivery-card">
          <span>⚡</span>

          <div>
            <strong>Hot & Fresh</strong>

            <p>Delivered Fast</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
