import React from "react";
import "../common/common.css";
import TypeOneCard from "../common/TypeOneCard";
import TypeTwoCard from "../common/TypeTwoCard";
import { holiday, holidayPicks } from "./holiday";

function HolidayPick() {
  return (
    <div className="personalize">
      <div className="response-title">Holiday picks. Designed to delight.</div>
      <div className="carousel-container">
        <div className="product-view">
          {" "}
          {holiday &&
            holiday.map((product) => {
              return (
                <div key={product.id}>
                  <TypeOneCard product={product} />
                </div>
              );
            })}
          {holidayPicks &&
            holidayPicks.map((product) => {
              return (
                <div key={product.id}>
                  <TypeTwoCard product={product} isHoliday={true} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default HolidayPick;
