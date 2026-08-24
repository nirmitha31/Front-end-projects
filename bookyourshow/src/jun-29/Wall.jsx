import React, { useState } from "react";

function Wall() {
  const [name, setName] = useState("David");

  return (
    <div>
      <h1>Name {name}</h1>
      <button onClick={() => setName("Johnny")}>Change</button>
    </div>
  );
}

export default Wall;
