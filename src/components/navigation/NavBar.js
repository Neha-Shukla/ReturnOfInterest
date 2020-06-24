import React from "react";
import './NavBar.css';
import { Link, BrowserRouter } from "react-router-dom";
import Guide from './button-details/Guide';
const NavBar = () => {
  return (
    <BrowserRouter>
    <div>
      <div className="Buttons">
        <div className="btn-text">
         <Link to='/guide' component={Guide}>GUIDE</Link>
        </div>
        
      </div>
    </div>
    </BrowserRouter>
  );
};

export default NavBar;
