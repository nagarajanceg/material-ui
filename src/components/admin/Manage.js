import React, { Component } from 'react';
// import Navbar from '../navbar/index1';
import Navbar from '../navbar/NavBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import spacing from '@material-ui/system';
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
        <Navbar />

        <MuiThemeProvider theme={theme}>
          <div>
            <Grid container spacing={24} justify="center">
              <Grid item>
                <Grid container justify="center" spacing={24}>
                  <Grid item>
                    <Button variant="contained" color="primary" size="medium">
                      {' '}
                      Browse
                    </Button>
                  </Grid>
                  <Grid item>
                    <TextField id="User-data" label="User-data" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={24} justify="center">
              <Grid item>
                <Grid container justify="center" spacing={24}>
                  <Grid item margin="normal">
                    <Button variant="contained" color="primary" size="medium">
                      {' '}
                      Browse
                    </Button>
                  </Grid>
                  <Grid item>
                    <TextField id="Parking-data" label="Parking-data" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={24} justify="center">
              <Grid item>
                <Grid container justify="center" spacing={24}>
                  <Grid item>
                    <Button variant="contained" color="primary" size="medium">
                      {' '}
                      Browse
                    </Button>
                  </Grid>
                  <Grid item>
                    <TextField id="Assignment" label="Assignment" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Manage;
