import React from 'react';

const PersonalStats = (props) => {
    return (
     <div className="info-container">
     <div className="title">PERSONAL STATISTICS</div>
     <div className="info-block">
       <ul className="lists">
         <li>
           <div className="text">Next income countdown</div>
           <div className="blue-text">00:00:00</div>
         </li>
         <li>
           <div className="text">310% income limit remain</div>
           <div className="blue-text">---ETH</div>
         </li>
         <li>
           <div className="text">Daily income 1%</div>
           <div className="blue-text">{props.dailyIncome} ETH</div>
         </li>
         <li>
           <div className="text">Referral income</div>
           <div className="blue-text">{props.referalIncome} ETH</div>
         </li>
         <li>
           <div className="text">Matching bonus</div>
           <div className="blue-text">---ETH</div>
         </li>
         <li>
           <div className="text">TOP Sponsor rewards</div>
           <div className="blue-text">---ETH</div>
         </li>
         <li>
           <div className="text">Income withdrawn to wallet</div>
           <div className="blue-text">{props.incomeWithdrawnToWallet} ETH</div>
         </li>
         <li>
           <div className="text">Daily income Received</div>
           <div className="blue-text">{props.balanceReceived} ETH</div>
         </li>
         
       </ul>
     </div>
     <button onClick={(event) => {
          event.preventDefault()
          try{
          props.withdraws()
          }catch(e){
            console.log("there is issue in withdrawing");
          }
            }} className="withdraw-btn">Withdraw</button>
     </div>
    )
}

export default PersonalStats;