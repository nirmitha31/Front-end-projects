import React from "react";
import { Link } from "react-router-dom";

function TypeTwoCard(props) {
  const { product } = props;
  const styleEngrave =
    product.isFreeEngraving || props.isHoliday
      ? "with-free-engraving"
      : "without-free-engraving";
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card-two" key={product.id}>
        <div className="outer-image-two">
          <img className="product-image-type-two" src={product.url} />
        </div>

        <div className="inner-section-two">
          {product.isFreeEngraving && (
            <p style={{ color: "red" }}>Free Engraving</p>
          )}
          <h5 style={{ color: "black" }}>{product.name}</h5>
          {product.caption && <p className={styleEngrave}>{product.caption}</p>}
        </div>
      </div>
    </Link>
  );
}

export default TypeTwoCard;
