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
import { TextFieldUtil, TextFieldWithOption } from '../../common/TextFieldUtil';

const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '65%'
});
class Report extends Component {
  state = {};
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const textFieldLabels = [
      'Parking Identifier1',
      'Parking Identifier2',
      'Parking Identifier3',
      'First Name',
      'Last Name',
      'Email'
    ];
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
              <Grid item xs="6">
                <TextFieldWithOption
                  label="Select Type"
                  value={this.state.select_type}
                  handler={this.handleChange}
                  menuOptions={reportTypes}
                />
              </Grid>
              <Grid item xs="6">
                <TextFieldWithOption
                  label="Select Status"
                  value={this.state.select_status}
                  handler={this.handleChange}
                  menuOptions={statusValues}
                />
              </Grid>
              {generateGrid(1)}
              {textFieldLabels.map(label => (
                <Grid item xs="4">
                  <TextFieldUtil
                    label={label}
                    val={this.state[label.toLowerCase().replace(/ /g, '_')]}
                    handler={this.handleChange}
                  />
                </Grid>
              ))}
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Report);
