import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./FoodDetails.css";
import { foodItems } from "../aug-14/foodbasket";

function FoodDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const [hoveredImage, setHoveredImage] = useState(null);

  const selectedFood = foodItems.find((food) => food.id === Number(id));

  if (!selectedFood) {
    return (
      <div className="food-not-found">
        <h2>Food not found</h2>

        <button onClick={() => navigate("/home")}>Go Home</button>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = selectedFood.price * quantity;

  const placeOrder = () => {
    alert(
      `Order placed successfully!

Food: ${selectedFood.name}

Quantity: ${quantity}

Total Price: ₹${totalPrice}`,
    );
  };

  const addToCart = () => {
    alert(`${selectedFood.name} added to cart successfully!`);
  };

  return (
    <div className="food-details-page">
      <div className="food-details-container">
        <button className="back-button" onClick={() => navigate("/home")}>
          ← Back to Home
        </button>

        <div className="food-details-card">
          {/* LEFT SECTION */}

          <div className="food-details-image-section">
            <div className="image-badge">🔥 Popular Choice</div>

            <button className="favorite-button">♡</button>

            {/* LARGE IMAGE */}

            <img
              className="main-food-image"
              src={hoveredImage || selectedFood.images[0]}
              alt={selectedFood.name}
            />

            {/* THUMBNAILS */}

            <div className="food-thumbnail-section">
              {selectedFood.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={`food-thumbnail ${
                      (hoveredImage || selectedFood.images[0]) === image
                        ? "active-thumbnail"
                        : ""
                    }`}
                    onMouseEnter={() => {
                      setHoveredImage(image);
                    }}
                  >
                    <img
                      src={image}
                      alt={`${selectedFood.name} ${index + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SECTION */}

          <div className="food-details-content">
            <span className="food-badge">⭐ Popular Choice</span>

            <h1>{selectedFood.name}</h1>

            <div className="rating-section">
              <span className="rating">⭐ {selectedFood.rating}</span>

              <span className="review-text">(120+ reviews)</span>
            </div>

            <p className="food-description">{selectedFood.description}</p>

            <div className="section-divider"></div>

            <h2 className="food-price">₹{selectedFood.price}</h2>

            {/* FOOD FEATURES */}

            <div className="food-features">
              <div className="feature-item">
                <div className="feature-icon">🌿</div>

                <div>
                  <strong>Freshly</strong>

                  <span>Prepared</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🧺</div>

                <div>
                  <strong>Premium</strong>

                  <span>Ingredients</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🍃</div>

                <div>
                  <strong>No Artificial</strong>

                  <span>Flavors</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🛡️</div>

                <div>
                  <strong>Hygienically</strong>

                  <span>Packed</span>
                </div>
              </div>
            </div>

            <div className="section-divider"></div>

            {/* QUANTITY */}

            <div className="quantity-section">
              <p>Quantity</p>

              <div className="quantity-control">
                <button onClick={decreaseQuantity}>−</button>

                <span>{quantity}</span>

                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>

            {/* DELIVERY */}

            <div className="delivery-message">
              <span className="delivery-icon">🛍️</span>

              <span>
                Order now and get it delivered fresh to your doorstep!
              </span>
            </div>

            <div className="section-divider"></div>

            {/* TOTAL */}

            <div className="total-section">
              <span>Total Amount</span>

              <strong>₹{totalPrice}</strong>
            </div>

            {/* BUTTONS */}

            <div className="food-action-buttons">
              <button className="cart-button" onClick={addToCart}>
                🛒 Add to Cart
              </button>

              <button className="order-button" onClick={placeOrder}>
                ⚡ Buy Now
              </button>
            </div>
          </div>

          {/* BOTTOM BENEFITS */}

          <div className="food-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🛵</span>

              <div>
                <strong>Fast Delivery</strong>

                <p>30–45 mins</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🏅</span>

              <div>
                <strong>Best Quality</strong>

                <p>100% Guaranteed</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">↩️</span>

              <div>
                <strong>Easy Returns</strong>

                <p>Within 24 hours</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🎧</span>

              <div>
                <strong>24/7 Support</strong>

                <p>We're here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
