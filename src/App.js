import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Cards from './Components/Card';
import Footer from './Components/Footer';
import players from './players.json'
import { Container } from 'react-bootstrap'

import './animation.css'

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    hint: "Click an image to begin",
    players,
    clicked: [],
    shake: false
  }

  handleClick = event => {
    if (!this.state.clicked.includes(event.target.id)) {
      this.setState(
        {
          clicked: [...this.state.clicked, event.target.id],
          hint: "You guessed correctly!",
          score: this.state.score + 1
        }
      );
      if (this.state.topScore <= this.state.score) {
        this.setState({ topScore: this.state.topScore + 1 },
          () => {
            if (this.state.clicked.length === 12) {
              this.setState(
                {
                  clicked: [],
                  hint: "You win! To continue just click on image",
                  score: 0
                }
              )
            }
          }
        )
      }
    } else {
      this.setState(
        {
          clicked: [],
          hint: "You guessed incorrectly",
          score: 0,
          shake: true
        }
      )
    }
  }

  onAnimationEnd = () => this.setState({shake: false});


  render() {
    return (
      <div className="App text-center">
        <Navbar hint={this.state.hint} score={this.state.score} topScore={this.state.topScore}></Navbar>
        <Header></Header>
        <Container className={this.state.shake ? 'shake' : ''} onAnimationEnd={this.onAnimationEnd}>
          <Cards players={this.state.players} handleClick={this.handleClick} />
        </Container>
        <Footer></Footer>
      </div >
    );
  }

}

export default App;
