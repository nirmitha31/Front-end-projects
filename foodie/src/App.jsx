import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FirstComponent from "./aug-11/FirstComponent";
import SecondComponent from "./aug-11/SecondComponent";
import FoodOptions from "./aug-11/FoodOptions";
import DataComponent from "./aug-12/DataComponent";
import DataInArray from "./aug-12/DataInArray";
import FoodDisplay from "./aug-13/FoodDisplay";
import ClassBasic from "./aug-14/ClassBasic";
import ClassStudy from "./aug-14/ClassStudy";
import FoodDisplayClass from "./aug-14/FoodDisplayClass";
import RestaurantDisplay from "./aug-14/RestaurantDisplay";
import MovieAdvertisement from "./aug-14/MovieAdvertisement";
import ClEvent from "./aug-17/ClEvent";
import FnEvent from "./aug-17/FnEvent";
import ClState from "./aug-17/ClState";
import HandlingThis from "./aug-17/HandlingThis";
import Atm from "./aug-18/Atm";
import ClChange from "./aug-18/ClChange";
import FnChange from "./aug-18/FnChange";
import ClassCounter from "./aug-18/ClassCounter";
import Routing from "./aug-20/Routing";
import AppRoutes from "./aug-20/routing/AppRoutes";
import Fragment from "./aug-25/Fragment";
import COne from "./aug-26/COne";
import CTwo from "./aug-26/CTwo";
import MountUpdateUnmount from "./aug-27/MountUpdateUnmount";
import Pure from "./aug-28/Pure";
import MemoExample from "./aug-28/MemoExample";
import CounterRedux from "./sep-3/CouterRedux";
import PostForm from "./sep-3/PostForm";
import MemeGenerator from "./sep-3/MemeGenerator";
import RefHook from "./RefHook";
import NormalComponent from "./sep-4/hoc/NormalComponent";
import UpdatedComponent from "./sep-4/hoc/UpdatedComponent";

function App() {
  let isTrue = false;
  let value = isTrue ? <COne /> : <CTwo />;
  return <Routing />;
}

export default App;
