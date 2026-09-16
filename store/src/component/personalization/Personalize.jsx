import React from "react";
import { personalize, personalizeTwo } from "./personalization";
import "../common/common.css";
import TypeOneCard from "../common/TypeOneCard";
import TypeTwoCard from "../common/TypeTwoCard";

function Personalize() {
  return (
    <div className="personalize">
      <div className="response-title">
        Personalisation. Make it one of a kind.
      </div>
      <div className="carousel-container">
        <div className="product-view">
          {" "}
          {personalize &&
            personalize.map((product) => {
              return (
                <div key={product.id}>
                  <TypeOneCard product={product} />
                </div>
              );
            })}
          {personalizeTwo &&
            personalizeTwo.map((product) => {
              return (
                <div key={product.id}>
                  <TypeTwoCard product={product} isHoliday={false} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Personalize;
