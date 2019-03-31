import React, { Component } from 'react';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import {
  primaryStyles as styles,
  primaryTheme as theme,
  generateGrid
} from '../common/componentUtils';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import classNames from 'classnames';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Icon from '@material-ui/core/es/Icon/Icon';
import { Email, DateRange, DirectionsCar, Message } from '@material-ui/icons';

class Owner extends Component {
  state = {};
  constructor() {
    super();
  }
  handleFromDateChange = date => {
    this.setState({ fromDate: date });
  };
  handleToDateChange = date => {
    this.setState({ toDate: date });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.marginLeft)}>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={24} alignItems="center" direction="row">
            {generateGrid(1)}
            <Grid item xs={1} />
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <DateRange />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  margin="normal"
                  label="From"
                  value={this.state.fromDate}
                  onChange={this.handleFromDateChange}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <DateRange />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  margin="normal"
                  label="To"
                  value={this.state.toDate}
                  onChange={this.handleToDateChange}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid container spacing={24} alignItems="center" direction="row">
            <Grid item xs={1} />
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <DirectionsCar />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <TextField fullWidth label="Parking Gate" />
            </Grid>
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <DirectionsCar />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <TextField fullWidth={true} label="Parking Slot" />
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid container spacing={16} alignItems="center" direction="row">
            <Grid item />
            <Grid item />
          </Grid>
          <Grid container spacing={24} alignItems="center" direction="row">
            <Grid item xs={1} />
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <Message />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <TextField fullWidth label="Additional Information" />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Owner);
