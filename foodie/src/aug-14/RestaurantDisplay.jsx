import React from "react";

import { Link } from "react-router-dom";

import { restaurantData } from "./restaurantData";

import "./RestaurantDisplay.css";

function RestaurantDisplay() {
  const restaurantList = restaurantData.map((restaurant) => {
    return (
      <Link
        key={restaurant.id}
        to={`/restaurant/${restaurant.id}`}
        className="restaurant-link"
      >
        <div className="restaurant-card">
          <div className="restaurant-image-box">
            <img src={restaurant.image} alt={restaurant.name} />

            <div className="restaurant-image-overlay">View Restaurant</div>
          </div>

          <div className="restaurant-info">
            <h3>{restaurant.name}</h3>

            <p className="restaurant-cuisine">{restaurant.cuisine}</p>

            <div className="restaurant-bottom">
              <span className="restaurant-rating">⭐ {restaurant.rating}</span>

              <span className="restaurant-time">{restaurant.deliveryTime}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="restaurant-display">
      <div className="restaurant-list">{restaurantList}</div>
    </div>
  );
}

export default RestaurantDisplay;
