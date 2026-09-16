import React, { createContext } from "react";
import ContextTwo from "./ContextTwo";

export const UserContext = createContext();

function ContextOne() {
  let name = "David";
  let city = "Bangalore";
  return (
    <UserContext value={{ name, city }}>
      <ContextTwo name={name} />
    </UserContext>
  );
}

export default ContextOne;
