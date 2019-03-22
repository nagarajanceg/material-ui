import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Grid, MenuItem } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';
import { Search } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: teal[400]
    },
    spacing: {
      padding: '0.2rem'
    }
  }
});
const statusValues = ['Available', 'Busy', 'Release', 'Assign'];
class ManageParking extends Component {
  state = {
    status: ''
  };
  constructor() {
    super();
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={24} alignItems="flex-end" direction="row">
            <Grid item xs={12} md={12}>
              <TextField
                id="park-status"
                select
                label="Status"
                value={this.state.status}
                margin="normal"
                variant="filled"
                onChange={this.handleChange('status')}
                SelectProps={{
                  MenuProps: {}
                }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="primary" />
                    </InputAdornment>
                  )
                }}
              >
                {statusValues.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ManageParking;
