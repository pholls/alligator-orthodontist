import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


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

  handleClick(i) {
    console.log('tooth clicked:', i);
    // compare i with the Game.trigger property
    if (this.trigger === i) {
      // if i === trigger, you lose (close mouth)
      console.log('u lose');
      // call an "endGame" function
    } else if (this.teeth[i] === "down") {
      // if tooth is already down
      // do nothing
      return;
    } else {
      console.log("ELSE")
      console.log(this.teeth[i])
      this.teeth[i] = "down";
      console.log(this.teeth[i])
      console.log(this.teeth)
      // if tooth is up, change tooth class to "down"
    }
  }

  render() {
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
