import { Children, Component } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./HomeLayout.scss";

interface HomeLayoutProps {
  component: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  let navigate = useNavigate();
  const { component } = props;
  const handleOpenSettings = () => {
    navigate("/settings");
  };

  const handleOpenHome = () => {
    //navigate("/home");
  }

  const handleOpenAsk = () => {
    //navigate("/settings");
  };

  const handleOpenProfile = () => {
    //navigate("/settings");
  };

  return (
    <div className="home-layout">
      <div className="header">
        <span
          onClick={() => {
            handleOpenSettings();
          }}
          className="material-symbols-outlined setting"
        >
          menu
        </span>
        <div className="heading-container">
          <div>LockPaw</div>
        </div>
      </div>
      <div className="body">{component}</div>
      <div className="footer">
        <span
          onClick={() => {
            handleOpenAsk();
          }}
          className="material-symbols-outlined home"
        >
          drafts
        </span>
        <span className="material-symbols-outlined ask">Key</span>
        <span
          onClick={() => {
            handleOpenProfile();
          }}
          className="material-symbols-outlined profile"
        >
          face
        </span>
      </div>
    </div>
  );
};

export default HomeLayout;
