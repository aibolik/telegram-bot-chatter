import React, { Component } from 'react';
import Chatter from './Chatter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to simple Telegram Chatter</h1>
        </header>
        <Chatter />
      </div>
    );
  }
}

export default App;
