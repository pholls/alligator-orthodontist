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
    <button className="tooth" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Mouth extends React.Component {
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
        <div className="status">status without curlies</div>
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

class Game extends React.Component {
  constructor() {
    super();
    this.teeth = Array(6).fill(null);
  }
    // randomly assign an index of the teeth array to be the trigger

  render() {
    return (
      <div className="game-mouth">
        <Mouth
          teeth={this.teeth}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    )
  }

}

export default Game;
