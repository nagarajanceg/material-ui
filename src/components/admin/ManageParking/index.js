import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';
import { Search } from '@material-ui/icons';
import classNames from 'classnames';
import Tabs from './Tabs';
import styled from '@material-ui/styles/styled';

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

const styles = () => ({
  gridFlex: {
    display: 'flex'
  },
  searchField: {
    'flex-basis': '70%'
  },
  flexEnd: {
    'justify-content': 'flex-end'
  }
});
const Content = styled('div')({
  maxWidth: 1000,
  padding: theme.spacing.unit * 4,
  margin: 'auto'
});

const statusValues = ['All', 'Available', 'Busy', 'Release', 'Assign'];

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
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
              <Grid
                item
                xs={1}
                className={classNames(classes.gridFlex, classes.flexEnd)}
              >
                <Search color="primary" />
              </Grid>
              <Grid item xs={11} className={classNames(classes.gridFlex)}>
                <TextField
                  id="park-status"
                  select
                  label="Status"
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
              <Grid item xs={12} />
              <Grid item xs={1} />
              <Grid item xs={11}>
                <Tabs />
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(ManageParking);
