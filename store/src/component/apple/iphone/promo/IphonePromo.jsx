import React from "react";
import "./iphonepromo.css";
import PromoVideo from "./PromoVideo";

function IphonePromo() {
  return (
    <div className="promo-wrapper">
      <h1 className="promo-header">Take a closer look.</h1>
      <div className="promo-section">
        <PromoVideo />
      </div>
    </div>
  );
}

export default IphonePromo;
