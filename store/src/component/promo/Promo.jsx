import React from "react";
import "./promo.css";

const Promo = () => {
  return (
    <div className="promo-bar">
      <p>
        Get up to 6 months of No Cost EMI<sup>◊</sup> plus up to ₹10000.00
        instant cashback<sup>§§</sup> on selected Mac models with eligible
        cards.
        <a href="#" className="promo-link">
          {" "}
          See offers &gt;
        </a>
      </p>
    </div>
  );
};

export default Promo;
