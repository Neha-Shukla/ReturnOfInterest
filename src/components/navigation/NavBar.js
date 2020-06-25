import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import Guide from './button-details/Guide';
const NavBar = () => {
  return (
    
    <div>
      <div className="Buttons">
        <div className="btn-text">
       <Link to='/guide' component={Guide}></Link>
        </div>
        
      </div>
    </div>
    
  );
};

export default NavBar;
