import React from "react";
import "./explorephone.css";
import { Link } from "react-router-dom";

const ExploreIphone = (props) => {
  const { data } = props;
  return (
    <section className="lineup">
      <div className="lineup-header">
        <h2>Explore the line-up.</h2>
        <a href="/" className="compare-link">
          Compare all models &rsaquo;
        </a>
      </div>
      <div className="carousel-container">
        {" "}
        <div className="lineup-grid">
          {data.map((product) => (
            <Link to={`/product/${product.id}`} className="link-product">
              <div key={product.name}>
                <div className={`card ${product.theme}`}>
                  <div className="image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>

                <div className="phone-details">
                  {product.tag && (
                    <span className="new-tag">{product.tag}</span>
                  )}

                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <p className="price">{product.price}</p>
                </div>
                <div className="actions">
                  <button className="btn primary">Learn more</button>
                  <button className="btn link">Buy &rsaquo;</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreIphone;
