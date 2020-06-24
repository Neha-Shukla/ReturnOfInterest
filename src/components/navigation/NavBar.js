import React from "react";
import Sponsors from "./button-details/Sponsors";
import Guide from "./button-details/Guide";
import Wallet from "./button-details/Wallet";
import './NavBar.css';
const NavBar = () => {
  return (
    <div>
      <div className="Buttons">
        <div className="btn-text">
          <a href={Sponsors}> TOP 4 SPONSORS</a>
        </div>
        <div className="btn-text">
          <a href={Guide}> GUIDE</a>
        </div>
        <div className="btn-text">
          <a href={Wallet}> WALLET TUTORIAL</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
