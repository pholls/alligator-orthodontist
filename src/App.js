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
    if (this.trigger === i) {
      console.log('u lose');
      // call an "endGame" function
    } else if (this.teeth[i] === "down") {
      return;
    } else {
      console.log("ELSE")
      this.teeth[i] = "down";
      // if tooth is up, change tooth class to "down"
    } // if one tooth remains, player wins
    this.render();
  }

  // GAME IS RENDERING AGAIN, BUT MOUTH IS NOT UPDATING
  // THE TEETH OBJECTS

  render() {
    console.log("RENDERING GAME", this.teeth)
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
