import React from "react";
import PersonalStats from "../personalStats/PersonalStats";
import Statistics from "../statistics/Statistics";
import Info from "../smartContract/Info";
import MyOrg from "../org/Myorg";
import "./Collection.css";
const Collection = (props) => {
  return (
    <div className="main-container">
      <Info
        address={props.address}
        contractBalance={props.contractBalance}
        amountWithdrawn={props.amountWithdrawn}
        amountInDailyPool={props.amountInDailyPool}
      ></Info>
      <PersonalStats
        dailyIncome={props.dailyIncome}
        referalIncome={props.referalIncome}
        incomeWithdrawnToWallet={props.incomeWithdrawnToWallet}
      ></PersonalStats>
      <Statistics></Statistics>
      <MyOrg totalUsers={props.totalUsers} address={props.address} personalInvited={props.personalInvited}></MyOrg>
    </div>
  );
};

export default Collection;
