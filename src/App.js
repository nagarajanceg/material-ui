import React, { Component } from 'react';
import Login from './components/login';
import NavBar from './components/navbar/NavBar';
import './App.css';
import { getMenu, defaultHeaderProps } from './components/common/config';
import ManageData from './components/admin/ManageData';
import ManageParking from './components/admin/ManageParking';
import MassManage from './components/admin/MassManage';
import Owner from './components/owner';
import User from './components/user';
import Report from './components/Report';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import CurrentBooking from './components/Report/CurrentBooking';
import PastBooking from './components/Report/PastBooking';
import { CookiesProvider } from 'react-cookie';

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
    case 'user':
      return (
        <div>
          <User {...props} />
        </div>
      );
    case 'report':
      return (
        <div>
          <Report {...props} />
        </div>
      );
    case 'ownerBooking':
    case 'userBooking':
      return (
        <div>
          <CurrentBooking {...props} />
        </div>
      );
    case 'ownerPastBooking':
    case 'userPastBooking':
      return (
        <div>
          <PastBooking {...props} />
        </div>
      );
    default:
      return null;
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }
  componentWillMount() {
    // Change the language based on the response from server
    fetch('http://localhost:3100/getLanguage')
      .then(data => data.json())
      .then(res => {
        // const i18Instance = I18n();
        // i18Instance.changeLanguage(res.lang, (err, t) => {
        //   if (err)
        //     return console.log(
        //       'something went wrong loading the language',
        //       err
        //     );
        // });
      });
  }
  setUserInfo = data => {
    this.setState({ userInfo: data });
  };
  render() {
    const { userInfo } = this.state;
    const headerProps = this.props.isLogin
      ? [defaultHeaderProps]
      : getMenu(this.props.component);
    return (
      <div>
        <CookiesProvider>
          <NavBar navItems={headerProps} {...this.props} />
          {!this.props.isLogin ? (
            getComponent({ ...this.props, userInfo })
          ) : (
            <Login {...this.props} onLogin={this.setUserInfo} />
          )}
        </CookiesProvider>
      </div>
    );
  }
}

App.propTypes = {
  isLogin: PropTypes.bool,
  component: PropTypes.string
};

export default withNamespaces()(App);
