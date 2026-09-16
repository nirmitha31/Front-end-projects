import React from "react";
import "./whymac.css";
import { benefits } from "./whymacdata";

function WhyMac() {
  return (
    <section className="why-mac">
      <div className="why-mac-header">
        <h2>Why Apple is the best place to buy Mac.</h2>
        <a href="#" className="shop-link">
          Shop Mac →
        </a>
      </div>
      <div className="carousel-container">
        <div className="why-mac-cards">
          {benefits.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>

              <h3 className="why-title">{item.title}</h3>
              <p className="why-description">{item.description}</p>

              <button className="why-plus">+</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMac;
