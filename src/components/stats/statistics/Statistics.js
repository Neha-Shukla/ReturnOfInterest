import React from 'react';

const Statistics = () => {
    return (
        <div className="info-container">
        <div className="title">STATISTICS</div>
        <div className="info-block">
          <ul className="lists">
            <li>
              <div className="text">Total amount of received ETH</div>
              <div className="blue-text">---</div>
            </li>
            <li>
              <div className="text">Total amount of invested ETH</div>
              <div className="blue-text">---</div>
            </li>
            
          </ul>
        </div>
        
        </div>
    )
}

export default Statistics;