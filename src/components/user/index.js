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
import { getData } from '../owner'
const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '65%'
});

class User extends Component {
  state = {
    items: {},
    dialog: {
      user: true
    }
  };
  constructor() {
    super();
  }
  componentDidMount() {
    var self = this;
    //${API.url}
    fetch(`${API.url}/getUserParkings`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        self.setState({
          items: json
        });
      }).catch(error => console.log('An error occured ', error));
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
		const userData = getData(this.props);
		const userId = userData && userData.user_vo ? userData.user_vo.user_id : '';
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
              <Grid item xs={1} />
              {generateGrid(2)}
              <Tabs userId={userId} {...this.state} />
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(User);
