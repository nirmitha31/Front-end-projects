import { useRef } from "react";
export default function RefHook() {
  const inputE1 = useRef(null);
  const onButtonClick = () => {
    inputE1.current.focus();
  };

  return (
    <>
      <input ref={inputE1} type="text" />
      <button onClick={onButtonClick}> Focus the input</button>
    </>
  );
}
