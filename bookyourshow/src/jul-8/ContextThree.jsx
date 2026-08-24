import React, { useContext } from "react";
import { UserContext } from "./ContextOne";

function ContextThree(props) {
  console.log("value is", useContext(UserContext));
  const { name, city } = useContext(UserContext);
  return (
    <>
      <p>This is props drilling</p>
      <h1>Hello {props.name}</h1>
      <p>this is context</p>
      <h1>Hello context {name}</h1>
      <h1>City is {city}</h1>
    </>
  );
}

export default ContextThree;
