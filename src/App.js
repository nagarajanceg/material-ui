import React, { Component } from 'react';
import Login from './components/login';
import NavBar from './components/navbar/NavBar';
import './App.css';
import { adminHeaderProps } from './components/navbar/config';
import ManageData from './components/admin/ManageData';
import ManageParking from './components/admin/ManageParking';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    return (
      <div>
        <NavBar navItems={adminHeaderProps} />
        {/*<ManageData />*/}
        <ManageParking />
        {this.state.isAuthenticated && <Login />}
      </div>
    );
  }
}

export default App;
