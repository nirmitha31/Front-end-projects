import React, { useState } from "react";

function FnChange() {
  const [name, setName] = useState("David");

  return (
    <div>
      <h1>Name : {name}</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
    </div>
  );
}

export default FnChange;
