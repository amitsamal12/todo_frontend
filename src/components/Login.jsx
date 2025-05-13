import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserLogin((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleClick() {
    console.log(userLogin);
    setUserLogin({ email: "", password: "" });
  }

  return (
    <div className="main-container">
      <div className="container">
        <h2>Login</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userLogin.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>Login</button>
        <Link to={"/register"}>Register Yourself</Link>
      </div>
    </div>
  );
};

export default Login;
