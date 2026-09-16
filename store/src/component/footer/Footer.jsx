import React from "react";
import { footerData } from "./footerdata";
import "./footer.css";

function Footer() {
  return (
    <footer className="apple-footer">
      <div className="footer-columns">
        {footerData.map((section, index) => (
          <div key={index} className="footer-column">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 000800 040 1966.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
