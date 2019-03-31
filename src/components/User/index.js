import React, { Component } from 'react';
import { TextField, Grid, withStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  primaryStyles as styles,
  primaryTheme as theme,
  generateGrid
} from '../common/componentUtils';
import classNames from 'classnames';
import Tabs from '../cardView/Tabs';
import styled from '@material-ui/styles/styled';
import { API } from '../common/ApiPath';
const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '65%'
});

class User extends Component {
  state = {
    items: {}
  };
  constructor() {
    super();
  }
  componentDidMount() {
    var self = this;
    //${API.url}
    fetch(`${API.url}/getParkings`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        self.setState({
          items: json
        });
      });
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
              <Grid item xs={1} />
              {generateGrid(2)}
              <Tabs items={this.state.items} />
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(User);
