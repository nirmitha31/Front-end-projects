import React from "react";
import { items } from "./navigationresponse";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="carousel-container">
      <div className="navigation-main">
        {items.map((item) => {
          return (
            <Link
              to={`/${item.name.toLocaleLowerCase()}`}
              style={{ color: "black" }}
            >
              <div className="navigation-item" key={item.id}>
                <img className="navigation-image" src={item.url} />
                <h5 className="navigation-heading">{item.name}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
