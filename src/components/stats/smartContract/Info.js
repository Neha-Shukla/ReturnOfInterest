import React from "react";

const Info = () => {
  return (
    <div className="info-container">
      <div className="title">SMART CONTRACT INFO</div>
      <div className="info-block">
        <ul className="lists">
          <li>
            <div className="text">Smart contract address</div>
            <div className="blue-text">2974974yny3ry3463aj08273ka8xm</div>
          </li>
          <li>
            <div className="text">Smart Contract Balance</div>
            <div className="blue-text">---ETH</div>
          </li>
          <li>
            <div className="text">Amount withdrawn by members</div>
            <div className="blue-text">---ETH</div>
          </li>
          <li>
            <div className="text">Amount in the daily pool</div>
            <div className="blue-text">---ETH</div>
          </li>
          <li>
            <div className="text">Maximum value of ETHER from top referrer</div>
            <div className="blue-text">---</div>
          </li>
          <li>
            <div className="text">Will register referrer</div>
            <div className="blue-text">---</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
