import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Logo from "./components/main/logo/Logo";
import Content from "./components/main/content/Content";
import NavBar from "./components/navigation/NavBar";
import Calc from "./components/calculation/Calc";
import Collection from "./components/stats/collection/Collection";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="main">
      <center>
        <div className="header-container">
          <Header></Header>
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
