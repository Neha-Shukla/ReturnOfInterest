import React ,{Component} from 'react';
import './Btn.css';
import Ether from './coin.svg';

 class Btn extends Component{
   render(){
    return (
        <div className="Btn-container">
        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(0.1)
        }}><img src={Ether} alt='ether'></img>+ [0.1ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(0.5)}}><img src={Ether} alt='ether'></img> + [0.5ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(1)}}><img src={Ether} alt='ether'></img> + [1ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(3)}}><img src={Ether} alt='ether'></img> + [3ETH]</button>

        <button className="add-ether-btn" onClick={()=>{
            this.props.data.changeData(5)}}><img src={Ether} alt='ether'></img> + [5ETH]</button>

        <button className="add-ether-btn"onClick={()=>{
            this.props.data.changeData(10)}}><img src={Ether} alt='ether'></img> + [10ETH]</button>
        </div>

    )
   }
   
    
}
export default Btn;


