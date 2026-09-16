import React, { useContext } from "react";
import { UserContext } from "./ContextOne";

function ContextThree(props) {
  const { name, city } = useContext(UserContext);
  return (
    <>
      <p>This is props drilling</p>
      <h1>Hello {props.name}</h1>

      <p>Conext value below</p>
      <h1>Context Name : {name}</h1>
      <h2>City is : {city}</h2>
    </>
  );
}

export default ContextThree;
