import React, { Component } from 'react';
import './App.css';

function Tooth(props) {
  return (
    <button className={"tooth " + props.value} onClick={props.onClick}>
    </button>
  );
}

class Mouth extends Component {
  renderTooth(i) {
    return (
      <Tooth
        value={this.props.teeth[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div className="teeth-row">
          {this.renderTooth(0)}
          {this.renderTooth(1)}
          {this.renderTooth(2)}
          {this.renderTooth(3)}
          {this.renderTooth(4)}
          {this.renderTooth(5)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  constructor() {
    super();
    this.teeth = Array(6).fill("up");
    this.trigger = Math.floor(Math.random() * this.teeth.length);
    this.status = "u playin";
  }

  endGame() {
    // FINISH THIS FUNCTION:
    // turn off event handler (unbind onClick)
    // add a link that says "play again?"
  }

  loseGame() {

  }

  winGame() {

  }

  handleClick(i) {
    if (this.trigger === i) {
      this.status = "u lose";
      this.endGame();
    } else if (this.teeth[i] === "down") {
      return;
    } else {
      this.teeth[i] = "down";
    }
    // DEFINE FUNCTION: determine if player won
    // exactly one member of this.teeth === "up" AND that index === this.trigger
    // if true, player wins (call endGame)
    this.forceUpdate();
  }

  render() {
    console.log("Trigger:", this.trigger)
    return (
      <div className="game-mouth">
        <Mouth
          status={this.status}
          teeth={this.teeth}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    )
  }

}

export default Game;
