import React from "react";
import "./disclaimer.css";
import { disclaimerData } from "./disclaimerData";

const Disclaimer = () => {
  return (
    <section className="apple-disclaimer">
      <ul>
        {disclaimerData.map((item, index) => (
          <li key={index}>
            <span className="symbol">{item.symbol}</span>
            <span className="text">
              {item.text} {item.linkText && <a href="#">{item.linkText}</a>}
              {item.linkUrl && (
                <a href={item.linkUrl} target="_blank" rel="noreferrer">
                  support.apple.com/121115
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>

      <p className="location-note">
        We use your location to show you delivery options faster. We found your
        location using your IP address or because you entered it during a
        previous visit to Apple.
      </p>
    </section>
  );
};

export default Disclaimer;
