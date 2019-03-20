import React, { Component } from 'react';
// import Login from './components/login';
import NavBar from './components/navbar/';
import Manage from './components/admin/ManageData';
import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        {/*<Login />*/}

        <NavBar />
        <Manage />
      </div>
    );
  }
}

export default App;
