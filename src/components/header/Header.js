import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="languages">
        <div className="lang-header">System Languages</div>
        <div className="lang-label">
          <span>English</span>
          
          <ul className="lang-list">
            <li className="list">
             
              UK
            </li>
            <li className="list">
              
              Korean
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
