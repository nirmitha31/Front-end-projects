import React from "react";
import "./bestplace.css";
import { bestplacedata } from "./bestplacedata";
import TypeOneCard from "../../../common/TypeOneCard";

function BestPlace() {
  return (
    <section className="lineup">
      <div className="lineup-header">
        <h2>Why Apple is the best place to buy iPhone.</h2>
        <a href="/" className="compare-link">
          Shop iPhone &rsaquo;
        </a>
      </div>

      <div className="carousel-container">
        <div className="product-view">
          {" "}
          {bestplacedata &&
            bestplacedata.map((product) => {
              return (
                <div key={product.id}>
                  <TypeOneCard product={product} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default BestPlace;
