import React, { Component } from 'react';
import Login from './components/login';
import NavBar from './components/navbar/NavBar';
import './App.css';
import {
  adminHeaderProps,
  defaultHeaderProps,
  ownerProps
} from './components/common/config';
import ManageData from './components/admin/ManageData';
import ManageParking from './components/admin/ManageParking';
import MassManage from './components/admin/MassManage';
import Owner from './components/Owner';
import PropTypes from 'prop-types';

const getComponent = props => {
  switch (props.component) {
    case 'manageData':
      return (
        <div>
          <ManageData {...props} />
        </div>
      );
    case 'manageParking':
      return (
        <div>
          <ManageParking {...props} />
        </div>
      );
    case 'massManage':
      return (
        <div>
          <MassManage {...props} />
        </div>
      );
    case 'owner':
      return (
        <div>
          <Owner {...props} />
        </div>
      );
    default:
      return null;
  }
};
const getMenu = props => {
  switch (props.component) {
    case 'owner':
      return ownerProps;
    default:
      return adminHeaderProps;
  }
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    const headerProps = this.props.isLogin
      ? [defaultHeaderProps]
      : getMenu(this.props);
    return (
      <div>
        <NavBar navItems={headerProps} {...this.props} />
        {!this.props.isLogin ? (
          getComponent(this.props)
        ) : (
          <Login {...this.props} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  isLogin: PropTypes.bool,
  component: PropTypes.string
};

export default App;
