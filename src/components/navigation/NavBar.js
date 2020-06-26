import React from "react";
import './NavBar.css';
import {Link, Router, BrowserRouter} from 'react-router-dom';
import Guide from './button-details/Guide';
const NavBar = () => {
  return (
    
    <div>
      <div className="Buttons">
        <div className="btn-text">
          <BrowserRouter>
          <Link to="/guide" component={Guide}></Link>
          </BrowserRouter>
       
        </div>
        
      </div>
    </div>
    
  );
};

export default NavBar;
