import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // 👈 hook

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // ✅ Navigate to home page
    navigate("/home");
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />

      <div className="login__body">
        <h1>Sign In</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
