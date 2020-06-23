import React from 'react';

const MyOrg = () => {
    return (
        <div className="info-container">
        <div className="title">MY ORGANISATION</div>
        <div className="info-block">
          <ul className="lists">
            <li>
              <div className="text">Invitation link</div>
              <div className="blue-text">---</div>
            </li>
            <li>
              <div className="text">Personal invited partners</div>
              <div className="blue-text">---</div>
            </li>
            <li>
              <div className="text">Total number of Partners</div>
              <div className="blue-text">---</div>
            </li>
            
          </ul>
          <button className="copy-btn">Copy</button>
        </div>
        
        </div>
    )
}

export default MyOrg;