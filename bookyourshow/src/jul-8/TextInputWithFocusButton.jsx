import { useRef } from "react";

export default function TextInputWithFocusButton() {
  // 1. Initialize the ref
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 3. Use .current to access the actual DOM node
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
