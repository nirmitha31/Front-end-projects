import React from "react";
import { response } from "./component/product/productresponse";
import Personalize from "./component/personalization/Personalize";
import ProductLanding from "./component/product/ProductLanding";
import Title from "./component/title/Title";
import Navigation from "./component/navigation/Navigation";
import HolidayPick from "./component/personalization/HolidayPick";
import OnlyApple from "./component/personalization/OnlyApple";
import SavingsAndOffer from "./component/personalization/SavingsAndOffer";
import { useSelector } from "react-redux";

function Landing() {
  return (
    <>
      <Title />
      <Navigation />
      <ProductLanding response={response} />
      <Personalize />
      <HolidayPick />
      <OnlyApple />
      <SavingsAndOffer />
    </>
  );
}

export default Landing;
