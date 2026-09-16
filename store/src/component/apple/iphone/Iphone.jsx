import React from "react";
import IphoneLanding from "./iphoneLanding/IphoneLanding";
import ExploreIphone from "./explorelineup/ExploreIphone";
import IphonePromo from "./promo/IphonePromo";
import BestPlace from "./best-place/BestPlace";
import { iphoneList } from "./explorelineup/exploreiphonelist";

function Iphone() {
  return (
    <>
      <IphoneLanding />
      <ExploreIphone data={iphoneList} />
      <IphonePromo />
      <BestPlace />
    </>
  );
}

export default Iphone;
