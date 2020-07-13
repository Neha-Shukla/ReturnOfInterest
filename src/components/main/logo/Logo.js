import React from "react";
import logo from './../../../ether.png';
import './logo.css';
const Logo = () => {
  return (
    <div className="logo">
    <img src={logo} alt='website logo' className="logo-style" />
    </div>
  );
};

export default Logo;
