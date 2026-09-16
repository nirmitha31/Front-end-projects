import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/apple.svg";

function TypeThreeCard(props) {
  const { data } = props;

  return (
    <Link to={`/product/${data.id}`}>
      <div key={data.id}>
        <img src={logo} className="apple-logo-only" />
        <div className="only-apple-description">{data.text}</div>
      </div>
    </Link>
  );
}

export default TypeThreeCard;
