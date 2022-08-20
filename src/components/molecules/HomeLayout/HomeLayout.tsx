import { Children, Component } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import './HomeLayout.scss';

interface HomeLayoutProps {
    component: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  let navigate = useNavigate();
  const { component } = props;
  const handleOpenSettings = () => {
    navigate('/settings');
  }

  return (
    <div className="home-layout">
        <div className="header">
            <span
                onClick={() => {handleOpenSettings()}} 
                className="material-symbols-outlined setting">menu</span>
            <div className="heading-container">
                <div>
                    Rveal
                </div>
            </div>
        </div>
        <div className="body">{component}</div>
        <div className="footer">footer</div>
    </div>
  );
};

export default HomeLayout;
