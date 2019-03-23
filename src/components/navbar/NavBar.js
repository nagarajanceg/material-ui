import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import RightNavBar from './RightNavBar';
import Grid from '@material-ui/core/Grid';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: teal[400]
    }
  },
  overrides: {
    MuiTypography: {
      title: {
        fontSize: '1.5rem'
      }
    }
  }
});

class NavBar extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Grid justify="space-between" alignItems="center" container spacing={24}>
                <Grid item>
                  <TypoGraphy variant="h6" color="inherit" align="left">Smart Park</TypoGraphy>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <RightNavBar {...this.props} md={12} />
                  </Hidden>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

RightNavBar.propTypes = {
	navItems: PropTypes.array,
};

export default NavBar;
