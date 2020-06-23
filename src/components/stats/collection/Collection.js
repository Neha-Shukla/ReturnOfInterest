import React from 'react';
import PersonalStats from '../personalStats/PersonalStats';
import Statistics from '../statistics/Statistics';
import Info from '../smartContract/Info';
import MyOrg from '../org/Myorg';
import './Collection.css'
const Collection = () => {
  return (
           <div className="main-container">
           <Info></Info>
           <PersonalStats></PersonalStats>
           <Statistics></Statistics>
           <MyOrg></MyOrg>
           </div>
  )
}

export default Collection;