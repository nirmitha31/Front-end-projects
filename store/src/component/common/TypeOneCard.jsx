import React from "react";
import { Link } from "react-router-dom";

function TypeOneCard(props) {
  const { product } = props;
  return (
    <Link to={`/product/${product.id}`} className="link-product">
      <div className="main" key={product.id}>
        <div className="outer-image">
          <img className="product-image" src={product.url} />
          <div className="inner-section">
            {product.name && <p style={{ color: "black" }}>{product.name}</p>}
            {product.caption && (
              <h4 style={{ color: "black", maxWidth: "230px" }}>
                {product.caption}
              </h4>
            )}
            <p className="subcaption">{product.subcaption}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TypeOneCard;
