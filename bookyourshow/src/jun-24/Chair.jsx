import React from "react";

function Chair() {
  const data = {
    color: "brown",
    backgroundColor: "blue",
  };

  return (
    <div>
      <h1 style={data}>CSS color inline</h1>
    </div>
  );
}

export default Chair;
