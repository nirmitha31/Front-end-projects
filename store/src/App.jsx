import "./App.css";
import NavBar from "./component/NavBar";
import Promo from "./component/promo/Promo";
import Disclaimer from "./component/disclaimer/Disclaimer";
import Footer from "./component/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isLoggedIn, isLoggedOut } from "./component/redux/slice/loginSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/common/login/Login";
import Landing from "./Landing";
import Iphone from "./component/apple/iphone/Iphone";
import Mac from "./component/apple/mac/Mac";
import IphoneDetail from "./component/apple/iphone/iphone-detail/IphoneDetail";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.value);
  // Retrieving a simple string
  const username = sessionStorage.getItem("username");
  console.log(username); // Output: Alice

  const authorize = username == "admin" || isLoggedIn;

  return (
    <BrowserRouter>
      {authorize && <NavBar />}
      {authorize && <Promo />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/store" element={<Landing />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/product/:productID" element={<IphoneDetail />} />
        <Route path="/mac" element={<Mac />} />
      </Routes>
      {/* You can also add a Footer component here if needed */}
      {authorize && <Disclaimer />}
      {authorize && <Footer />}
    </BrowserRouter>
  );
}

export default App;
