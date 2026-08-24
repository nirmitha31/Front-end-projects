import React from "react";

function Click() {
  const sayHello = () => {
    console.log("I have clicked a button");
  };
  return (
    <div>
      <button onClick={sayHello}>Click</button>
    </div>
  );
}

export default Click;
