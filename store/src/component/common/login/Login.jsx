import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoggedIn, isLoggedOut } from "../../redux/slice/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (username == "admin" && password == "admin") {
      // Login logic (API call can be added here)
      console.log("Username:", username);
      console.log("Password:", password);
      // Storing a simple string
      sessionStorage.setItem("username", username);

      dispatch(isLoggedIn(true));
      navigate("/home");
    } else {
      alert("incorrect username and password");
    }
  };

  if (username == "" && password == "") {
    console.log("calling logout");
    sessionStorage.setItem("username", "");
    dispatch(isLoggedOut());
  }

  return (
    <div>
      <h1 className="login-warning">
        This project is developed for learning purpose only <br />
        <h2 className="developer">Developed by: Creative workss team</h2>
      </h1>
      <div className="login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Please login to your account</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="footer-text">
            <span>Forgot password?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
