import React from "react";
import "./iphonedetail.css"; // Import the CSS file
import { useParams } from "react-router-dom";
import { iphoneBuy, iphoneList } from "../explorelineup/exploreiphonelist";

const IphoneDetail = () => {
  const { productID } = useParams();
  const selectedPhone = iphoneBuy.filter((value) => value.id == productID);
  return (
    <div className="comp-container">
      {/* Top Header Section */}
      {selectedPhone.map((product) => {
        return (
          <div>
            <div className="comp-header">
              <div className="header-left">
                <h1 className="main-title">Buy {product.name}</h1>
                <p className="price-details">{product.price}</p>
                <div className="intelligence-info">
                  {/* Unicode Sparkles */}
                  <span className="icon-sparkle">✨</span>
                  <span className="intelligence-text">
                    Built for Apple Intelligence
                  </span>
                  <a href="#" className="learn-more-link">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="header-right">
                <div className="pill-container">
                  <span className="pill-text">
                    Get ₹3350.00–₹64000.00 for your trade-in
                  </span>
                  {/* Unicode Info icon */}
                  <span className="icon-info">ⓘ</span>
                </div>
                <div className="pill-container">
                  <span className="pill-text">
                    No Cost EMI* and Instant Cashback*
                  </span>
                  {/* Unicode Info icon */}
                  <span className="icon-info">ⓘ</span>
                </div>
              </div>
            </div>

            {/* Main Content Section: Product Comparison */}
            <div className="comp-content">
              {/* Left Content Area: Phone Images (Placeholder div for image area) */}
              <div className="phone-display-area">
                {/* In a real app, this would contain image tags or specific styled components for the phones */}
                <div className="phone-image-placeholder">
                  <img className="phone-image" src={product.image} />
                </div>
                <button className="carousel-arrow">
                  {/* Unicode Chevron Right */}
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IphoneDetail;
