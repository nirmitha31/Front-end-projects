import React from "react";
import "../common/common.css";
import TypeOneCard from "../common/TypeOneCard";
import { savingandoffer } from "./saving";

function SavingsAndOffer() {
  return (
    <div className="personalize">
      <div className="response-title">
        Savings and offers. Exclusive deals, special stores and more.
      </div>
      <div className="carousel-container">
        <div className="product-view">
          {" "}
          {savingandoffer &&
            savingandoffer.map((product) => {
              return (
                <div key={product.id}>
                  <TypeOneCard product={product} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SavingsAndOffer;
