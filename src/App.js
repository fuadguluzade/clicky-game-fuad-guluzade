import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import { Component } from 'react';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    hint: "Click an image to begin"
  }


  render(){
    return (
      <div className="App">
        <Navbar hint={this.state.hint} score={this.state.score} topScore={this.state.topScore}></Navbar>
        <Header></Header>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    );
  }
  
}

export default App;
