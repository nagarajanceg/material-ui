import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import FormActionUtil from '../../common/FormActionUtils';
import FileUploader from '../../common/FileUploader';

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
          <Grid container spacing={24} justify="center" direction="column">
            <Grid item />
            <FileUploader name="Browse" id="user-data" label="User Data" />
            <FileUploader name="Browse" id="parking-data" label="Parking Data" />
            {/*<FileUploader name="Browse" id="assignment" label="Assignment" />*/}
            <Grid item />
            <Grid item />
            <Grid item xs={12}>
              <FormActionUtil />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Manage;
