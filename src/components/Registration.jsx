import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    setUserRegistration((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleClick() {
    console.log(userRegistration);
    setUserRegistration({ username: "", email: "", password: "" });
  }

  return (
    <div className="main-container">
      <div className="container">
        <h2>Registartion</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="name"
            name="username"
            value={userRegistration.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userRegistration.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={userRegistration.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>SignUp</button>
        <Link to={"/login"}>Go to Login Page</Link>
      </div>
    </div>
  );
};

export default Registration;
