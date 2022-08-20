import { Component } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import './Home.scss';

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="home-page">
      Hello!
    </div>
  );
};

export default Home;
