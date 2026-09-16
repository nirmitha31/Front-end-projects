import React, { useEffect, useState } from "react";

function FnLifeCycle() {
  const [count, setCount] = useState(0);

  // 1. MOUNTING
  useEffect(() => {
    console.log("Component Mounted");

    // 3. UNMOUNTING
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // 2. UPDATING
  useEffect(() => {
    if (count > 0) {
      console.log("Component Updated - Count:", count);
    }
  }, [count]);

  return (
    <div>
      <h2>React Lifecycle Demo</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default FnLifeCycle;
