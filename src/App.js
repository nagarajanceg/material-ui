import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Login from './components/login';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};
  
  render() {
    
    return (
      <div>
        
        <Login />
      </div>
    );
  }
}

export default App;
