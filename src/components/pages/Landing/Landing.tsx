import { Component } from "react";
import guitarist from "../../../icons/guitar.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Landing.scss";

const Landing = () => {
  let navigate = useNavigate(); 
  const routeChange = (path: string) =>{ 
    navigate('/'+path);
  }

  return (
    <div className="landing-page">
      <img className="guitarist" src={guitarist}></img>
      <div className="button-signup">
        <button
          className="landing-button"
          onClick={ () => routeChange('signup')}
        >
          SIGNUP
        </button>
      </div>
      <div className="button-signin">
        <button
          className="landing-button"
          onClick={ () => routeChange('signin')}
        >
          SIGNIN
        </button>
      </div>
    </div>
  );
};

export default Landing;
