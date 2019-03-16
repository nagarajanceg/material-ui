import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};
  componentDidMount() {
    this.fetchDetails();
  }
  fetchDetails = () => {
    const self = this;
    fetch('http://localhost:3100/get')
      .then(data => data.json())
      .then(res => {
        // self.state.response = 'texttt';
        self.setState({
          response: res[0].label
        });
        console.log(res[0]);
      });
  };
  render() {
    let buttonText;
    if (this.state.response !== undefined) {
      buttonText = this.state.response;
    } else {
      buttonText = 'default State';
    }
    return (
      <Button variant="contained" color="primary">
        {buttonText}
      </Button>
    );
    // <div className="App" />;
  }
}

export default App;
