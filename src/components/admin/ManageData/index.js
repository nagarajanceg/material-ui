import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import ActionItem from './ActionItem';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: teal[400]
    }
  },
  spacing: 8,
  padding: 8
});
class Manage extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={24} justify="center" direction="column">
            <Grid item >
              <ActionItem name="Browse" id="User-data" />
            </Grid>
            <Grid item >
              <ActionItem name="Browse" id="Parking-data" />
            </Grid>
            <Grid item >
              <ActionItem name="Browse" id="Assignment" />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Manage;
