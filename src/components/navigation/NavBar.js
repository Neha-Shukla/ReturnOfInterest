import React from 'react';
import './NavBar.css';
import Guide from './button-details/Guide.js';
const NavBar = () => {

  
  return (
    <div className="container">
      <button className="btn" onClick={Guide}>Guide</button>
    </div>
  )
}

export default NavBar;