import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import ActionItem from './ActionItem';
import { FormControl, Input, Button } from '@material-ui/core';
import CloudDownload from '@material-ui/icons/CloudDownload';
// import CloudIcon from '@material-ui/icons/CloudUpload';
import Send from '@material-ui/icons/Send';

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
class Manage extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <form>
            <Grid container spacing={24} justify="center" direction="column">
              <Grid item />
              <Grid item xs={12}>
                <ActionItem name="Browse" id="User-data" />
              </Grid>
              <Grid item xs={12}>
                <ActionItem name="Browse" id="Parking-data" />
              </Grid>
              <Grid item xs={12}>
                <ActionItem name="Browse" id="Assignment" />
              </Grid>
              <Grid item />
              <Grid item />
              <Grid item xs={12}>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  spacing={24}
                >
                  <Grid item>
                    <Button variant="contained" color="primary" size="medium">
                      Download <span style={{ padding: 3 }} /> <CloudDownload />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary" size="medium">
                      submit <span style={{ padding: 3 }} /> <Send />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Manage;
