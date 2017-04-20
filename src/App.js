import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnswerRow from './components/AnswerRow';
import GuessRow from './components/GuessRow';
import Trey from './components/Trey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AnswerRow piece1='Red' piece2='blue' piece3='green' piece4='yellow' />
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <GuessRow /><br/>
        <Trey />
      </div>
    );
  }
}

export default App;
