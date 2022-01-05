import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="login-header">
        <div className="header-logo">
          <img src="./assets/img/header-logo.png" alt="header-logo" />
        </div>
        <div className="text">
          <h5>Christian Dating</h5>
          <p>Build Divine Connections</p>
        </div>
        <div className="top-baloon"></div>
      </div>
    </>
  );
};

export default Header;
