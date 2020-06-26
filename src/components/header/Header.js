import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div className="header">
        <p className="heading">Your Ethereum Wallet</p><br />
        <p className="value">{props.address}</p>
      </div>
    
  );
};

export default Header;
