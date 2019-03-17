import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            SmartPark
          </Typography>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};

export default NavBar;
