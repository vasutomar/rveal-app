import { Component } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
// @ts-ignore
import HomeLayout from "../../molecules/HomeLayout/HomeLayout.tsx"; 

const Home = () => {
  let navigate = useNavigate(); 

  return (
    <HomeLayout component={<div>Component</div>}/>
  );
};

export default Home;
