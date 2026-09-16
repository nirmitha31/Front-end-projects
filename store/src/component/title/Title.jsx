import React from "react";
import "./title.css";

function Title() {
  return (
    <div>
      <div className="header-color">
        <div className="header-text">
          <p className="header-title"> Store</p>
          <div className="header-notify">
            <h3>Give something special this holiday</h3>
            <a className="connect" href="https://contactretail.apple.com/Help">
              Connect with specialist
            </a>
            <br />
            <a className="connect" href=" https://www.apple.com/in/retail/">
              Find an apple store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
