import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import RightNavBar from './RightNavBar';
import Grid from '@material-ui/core/Grid';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: teal[400]
    }
  }
});
class AppBarTest extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Grid justify="space-between" container>
                <Grid item>
                  <TypoGraphy variant="h4" color="inherit" align="left">
                    SmartPark
                  </TypoGraphy>
                </Grid>
                <Grid item>
                  <RightNavBar />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AppBarTest;
