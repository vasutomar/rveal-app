import { Component } from "react";
// @ts-ignore
import mountains from "../../../icons/mountains.svg";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Landing.scss";
// @ts-ignore
import Button from "../../elementary/Button/Button.tsx";

const Landing = () => {
  let navigate = useNavigate();
  const routeChange = (type: string) => {
    let path = type === "primary" ? "signin" : "signup";
    navigate(`/${path}`);
  };

  return (
    <div className="landing-page">
      <div className="upper-landing">
        <div className="app-title">RVEAL</div>
        <div className="action-holder">
          <div className="btn">
            <Button text="LOG IN" type="primary" clickHandler={routeChange} />
          </div>
          <div className="btn">
            <Button
              text="REGISTER"
              type="secondary"
              clickHandler={routeChange}
            />
          </div>
          <div className="know-more">Know More</div>
        </div>
      </div>
      <div className="image-holder">
        <img src={mountains}></img>
      </div>
    </div>
  );
};

export default Landing;
