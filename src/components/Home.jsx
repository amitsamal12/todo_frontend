import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isLoggedIn = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return <div>Home</div>;
};

export default Home;
