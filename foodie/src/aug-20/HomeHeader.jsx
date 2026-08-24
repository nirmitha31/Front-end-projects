import React from "react";

function HomeHeader() {
  return (
    <header className="home-header">
      <div className="home-logo">
        <div className="logo-icon">🍴</div>

        <h2>
          Foodie<span>.</span>
        </h2>
      </div>

      <div className="home-search">
        <input type="text" placeholder="Search for food, restaurants..." />

        <button>🔍</button>
      </div>

      <div className="home-header-actions">
        <button className="header-icon-button">♡</button>

        <button className="header-icon-button cart-header-button">
          🛒
          <span className="cart-count">3</span>
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
