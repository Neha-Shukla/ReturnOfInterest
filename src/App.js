import React, {Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Logo from "./components/main/logo/Logo";
import Content from "./components/main/content/Content";
import NavBar from "./components/navigation/NavBar";
import Calc from "./components/calculation/Calc";
import Collection from "./components/stats/collection/Collection";
import Footer from "./components/footer/Footer";
import Web3 from 'web3'



class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
   
  state={
    account:"null"
  }
  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    this.setState({ account: accounts[0] })
    console.log(this.state);
    // const networkId = await web3.eth.net.getId()
    //const networkData = roi.networks[networkId]
    // if(networkData) {
    //   const roi = web3.eth.Contract(ReturnOnInterest.abi, networkData.address)
    //   this.setState({roi});
      
    //   this.setState({loading:false});
    // } else {
    //   window.alert('ReturnOnInterest contract not deployed to detected network.')
    // }
  }
  render() {
    return (
      <div className="main">
      <center>
        <div className="header-container">
          <Header address={this.state.account}></Header>
        </div>

        <div className="main-container">
          <Logo></Logo>
          <Content></Content>
        </div>
        <div className="App-header">
          
          <NavBar></NavBar>
          <Calc></Calc>
          <Collection></Collection>
        </div>
        <Footer></Footer>
        </center>
      </div>
    );
  }
}

export default App;
