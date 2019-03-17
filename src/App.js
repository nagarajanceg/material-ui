import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import NavBar from './components/navbar/NavBar';
import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default App;
