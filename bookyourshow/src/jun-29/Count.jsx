import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count Value {count}</h1>
      <button onClick={() => setCount(count + 1)}>In</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

export default Count;
