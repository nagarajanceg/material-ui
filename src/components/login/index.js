import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './signIn';
import get from 'lodash/get';

class Login extends Component {
  state = {
    response: {}
  };
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <SignIn {...this.props} />
      </div>
    );
  }
}

export default Login;
