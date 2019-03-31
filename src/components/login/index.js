import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './signIn';

class Login extends Component {
  state = {
    response: {}
  };
  constructor() {
    super();
    //this.fetchDetails();
  }
  // componentWillMount() {
  //   this.fetchDetails();
  // }
  fetchDetails = () => {
    const self = this;
    fetch('http://localhost:3100/get')
      .then(data => data.json())
      .then(res => {
        self.setState({
          response: res[0]
        });
        console.log('my response ==', res[0]);
      });
    var data = {
      id: '1223',
      val: 'myvalue'
    };
    fetch('http://localhost:3100/samp1', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(res => {
        console.log('res received ==>', res);
      });
  };
  render() {
    return (
      <div>
        {/*<Navbar />*/}
        <SignIn {...this.props} />
        {/*{this.state.response.label ? (
          <Button variant="contained" color="secondary">
            {this.state.response.label}
          </Button>
        ) : (
          ''
        )}*/}
      </div>
    );
  }
}

export default Login;
