import React from "react";

function Hello(props) {
  console.log("recived data", props);
  const { imageUrl } = props;
  return (
    <div>
      <h1 className="hello-text">Hello React</h1>
      <img src={imageUrl} />
    </div>
  );
}

export default Hello;
