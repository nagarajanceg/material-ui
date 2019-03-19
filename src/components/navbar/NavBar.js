import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import spacing from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Dashboard from '@material-ui/icons/Dashboard';

const NavBar = () => {
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
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Grid justify="space-between" container>
              <Grid item align="left">
                {/*<div textAlign="left">*/}
                <Typography variant="h6" color="inherit" align="left">
                  SmartPark
                </Typography>
              </Grid>
              <Grid item align="right">
                <div>
                  <Typography variant="h6" color="inherit">
                    <Dashboard />
                    Manage Data
                  </Typography>
                </div>
              </Grid>
              {/*<Grid item align="right">
                <div>
                  <Typography variant="h6" color="inherit" align="right">
                    Login
                  </Typography>
                </div>
              </Grid>*/}
            </Grid>
            {/*<div textAlign="right">
                <Button color="inherit">Login</Button>
              </div>*/}
            {/*</div>*/}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default NavBar;
