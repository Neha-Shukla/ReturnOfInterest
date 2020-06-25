import React from "react";
import './Header.css'
const Header = (props) => {
  return (
    <div className="header">
      Address:{props.address}
    </div>
  );
};

export default Header;
