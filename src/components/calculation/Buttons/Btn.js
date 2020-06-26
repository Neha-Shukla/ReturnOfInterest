import React ,{Component} from 'react';
import './Btn.css'
// import {useState} from 'react';



 class Btn extends Component{
    
      
    
       
   render(){
    return (


        <div className="Btn-container">
        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(0.1)
        }}> + [0.1ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(0.5)}}> + [0.5ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(1)}}> + [1ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(3)}}> + [3ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(5)}}> + [5ETH]</button>

        <button className="add-ether-btn"onClick={()=>{
            this.props.data.changeData(10)}}> + [10ETH]</button>
        </div>

    )
   }
   
    
}
export default Btn;


