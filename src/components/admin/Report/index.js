import React, { Component } from 'react';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  generateGrid,
  primaryStyles as styles,
  primaryTheme as theme
} from '../../common/componentUtils';
import styled from '@material-ui/styles/styled';
import { reportTypes, statusValues } from '../../common/config';
// import { TextFieldUtil } from '../../common/TextFieldUtil';

const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '65%'
});
class Report extends Component {
  state = {
    identifier1: ''
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
              <Grid item xs="6">
                <TextField
                  id="report-type"
                  select
                  label="Select Type"
                  value={this.state.report_type}
                  onChange={this.handleChange('report_type')}
                  SelectProps={{
                    MenuProps: {}
                  }}
                  fullWidth
                >
                  {reportTypes.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs="6">
                <TextField
                  id="report-status"
                  select
                  label="Select Status"
                  value={this.state.status}
                  onChange={this.handleChange('status')}
                  SelectProps={{
                    MenuProps: {}
                  }}
                  fullWidth
                >
                  {statusValues.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {generateGrid(1)}
              <Grid item xs="4">
                <TextField
                  id="parking_identifier1"
                  label="Parking Identifier1"
                  placeholder="Enter Identifier1"
                  value={this.state.parking_identifier1}
                  onChange={this.handleChange('parking_identifier1')}
                  fullWidth
                />
              </Grid>
              <Grid item xs="4">
                <TextField
                  id="parking_identifier2"
                  label="Parking Identifier2"
                  placeholder="Enter Identifier2"
                  value={this.state.parking_identifier2}
                  onChange={this.handleChange('parking_identifier2')}
                  fullWidth
                />
              </Grid>
              <Grid item xs="4">
                <TextField
                  id="parking_identifier3"
                  label="Parking Identifier3"
                  placeholder="Enter Identifier3"
                  value={this.state.parking_identifier3}
                  onChange={this.handleChange('parking_identifier3')}
                  fullWidth
                />
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Report);
