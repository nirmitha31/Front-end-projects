import React from "react";
import "./product.css";
import ProductDetailPage from "./ProductDetailPage";
import { response } from "./productresponse";

function ProductLanding() {
  return (
    <div className="carousel-container">
      <div className="response-title">{response.title}</div>
      <div className="product-view">
        {response.products &&
          response.products.map((product) => {
            return (
              <div key={product.id}>
                <ProductDetailPage product={product} />;
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductLanding;
