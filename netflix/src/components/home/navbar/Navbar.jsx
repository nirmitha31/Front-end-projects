import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </div>
  );
}

export default Navbar;
