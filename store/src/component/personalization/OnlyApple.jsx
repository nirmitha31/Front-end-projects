import React from "react";
import "../common/common.css";
import TypeOneCard from "../common/TypeOneCard";

import {
  onlyapple,
  onlyappletext,
  specialist,
  specialists,
} from "./onlyatapple";
import TypeThreeCard from "../common/TypeThreeCard";
import TypeFourCard from "../common/TypeFourCard";

function OnlyApple() {
  return (
    <div className="personalize">
      <div className="response-title">
        Only at Apple. All set for the season.
      </div>
      <div className="carousel-container">
        <div className="product-view">
          {" "}
          {onlyapple &&
            onlyapple.map((product) => {
              return (
                <div key={product.id}>
                  <TypeOneCard product={product} />
                </div>
              );
            })}
          <div className="only-text-box">
            {onlyappletext &&
              onlyappletext.map((data) => {
                return (
                  <div className="only-apple" key={data.id}>
                    <TypeThreeCard data={data} />
                  </div>
                );
              })}
          </div>
          {specialist &&
            specialist.map((product) => {
              return (
                <div key={product.id}>
                  <TypeOneCard product={product} />
                </div>
              );
            })}
          {specialists &&
            specialists.map((product) => {
              return (
                <div key={product.id}>
                  <TypeFourCard product={product} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default OnlyApple;
