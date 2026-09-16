import React from "react";
import MacLanding from "./mac-landing/MacLanding";
import ExploreIphone from "../iphone/explorelineup/ExploreIphone";
import { macData } from "./mac-landing/maclandingdata";
import WhyMac from "./why-mac/WhyMac";

function Mac() {
  return (
    <>
      <MacLanding />
      <WhyMac />
    </>
  );
}

export default Mac;
