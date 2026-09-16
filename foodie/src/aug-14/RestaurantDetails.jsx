import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { restaurantData } from "./restaurantData";

import "./RestaurantDetails.css";

function RestaurantDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const selectedRestaurant = restaurantData.find(
    (restaurant) => restaurant.id === Number(id),
  );

  if (!selectedRestaurant) {
    return (
      <div className="restaurant-not-found">
        <h2>Restaurant not found</h2>

        <button onClick={() => navigate("/home")}>Back to Home</button>
      </div>
    );
  }

  const menuList = selectedRestaurant.menu.map((food) => {
    return (
      <div className="menu-card" key={food.id}>
        <div className="menu-image">
          <img src={food.image} alt={food.name} />
        </div>

        <div className="menu-info">
          <div className="menu-title-row">
            <h3>{food.name}</h3>

            <span className="menu-rating">⭐ {food.rating}</span>
          </div>

          <p>Freshly prepared and delivered hot to your doorstep.</p>

          <div className="menu-bottom">
            <strong>₹{food.price}</strong>

            <button>ADD +</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="restaurant-details-page">
      <button
        className="restaurant-back-button"
        onClick={() => navigate("/home")}
      >
        ← Back to Home
      </button>

      {/* HERO */}

      <section className="restaurant-hero">
        <img
          className="restaurant-cover"
          src={selectedRestaurant.coverImage}
          alt={selectedRestaurant.name}
        />

        <div className="restaurant-cover-overlay"></div>

        <div className="restaurant-hero-content">
          <div className="restaurant-logo-image">
            <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
          </div>

          <div>
            <span className="restaurant-open">● Open Now</span>

            <h1>{selectedRestaurant.name}</h1>

            <p>{selectedRestaurant.cuisine}</p>

            <div className="restaurant-meta">
              <span>⭐ {selectedRestaurant.rating}</span>

              <span>🕒 {selectedRestaurant.deliveryTime}</span>

              <span>📍 {selectedRestaurant.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <div className="restaurant-details-content">
        <section className="restaurant-about">
          <div>
            <span className="restaurant-section-label">About Restaurant</span>

            <h2>
              Delicious food.
              <br />
              Delivered fresh.
            </h2>
          </div>

          <p>{selectedRestaurant.description}</p>
        </section>

        {/* INFORMATION */}

        <section className="restaurant-features">
          <div>
            <span>🛵</span>

            <strong>Fast Delivery</strong>

            <p>{selectedRestaurant.deliveryTime}</p>
          </div>

          <div>
            <span>⭐</span>

            <strong>Top Rated</strong>

            <p>{selectedRestaurant.rating} rating</p>
          </div>

          <div>
            <span>🥘</span>

            <strong>Fresh Food</strong>

            <p>Prepared daily</p>
          </div>

          <div>
            <span>📦</span>

            <strong>Safe Packing</strong>

            <p>Hygienic packaging</p>
          </div>
        </section>

        {/* MENU */}

        <section className="restaurant-menu">
          <div className="restaurant-menu-heading">
            <div>
              <span>Our Menu</span>

              <h2>Popular Dishes</h2>
            </div>

            <button>View Full Menu →</button>
          </div>

          <div className="restaurant-menu-grid">{menuList}</div>
        </section>
      </div>
    </div>
  );
}

export default RestaurantDetails;
