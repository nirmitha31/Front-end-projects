import React from "react";
import ContextThree from "./ContextThree";

function ContextTwo(props) {
  return (
    <>
      <ContextThree name={props.name} />
    </>
  );
}

export default ContextTwo;
