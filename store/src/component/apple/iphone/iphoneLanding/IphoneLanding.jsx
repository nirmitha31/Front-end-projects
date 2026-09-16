import React from "react";
import "./iphonelanding.css";
import { iphoneItems } from "./iphoneData";
import { useSelector } from "react-redux";

function IphoneLanding() {
  const autorize = useSelector((state) => state.login.value);
  console.log("i am in iphone landing", autorize);
  return (
    <section className="iphone-section">
      <div className="iphone-nav">
        <h1 className="iphone-title">iPhone</h1>

        <div className="iphone-items">
          {iphoneItems.map((item) => (
            <div key={item.name} className="iphone-item">
              <img src={item.image} alt={item.name} />
              <span className="label">{item.name}</span>
              {item.tag && <span className="tag">{item.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IphoneLanding;
