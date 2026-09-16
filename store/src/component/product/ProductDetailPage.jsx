import React from "react";
import { Link } from "react-router-dom";

function ProductDetailPage(props) {
  const { product } = props;

  return (
    <Link to={`/product/${product.id}`} className="link-product">
      <div className="main" key={product.id}>
        <div className="outer-image">
          <img className="product-image" src={product.url} />
          <div className="inner-section">
            <h1 className="product-name">{product.name}</h1>
            {product.caption && (
              <h4 className="caption">
                {product.caption} <sup>+</sup>
              </h4>
            )}
            <p>{product.subcaption}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductDetailPage;
