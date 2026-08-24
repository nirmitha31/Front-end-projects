import { useState, useEffect } from "react";

function Dependency() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  // dependecy injection :
  // if you add any value in dependency injection ,
  // once the value changes
  // you useEffect block will get executed
  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+</button>
      <p>Multiple of count by 2: {calculation}</p>
    </div>
  );
}

export default Dependency;
