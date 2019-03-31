import React, { Component } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import classNames from 'classnames';
import Icon from '@material-ui/core/es/Icon/Icon';
import { DateRange } from '@material-ui/icons';
import { Grid, withStyles } from '@material-ui/core';
import {
  primaryStyles as styles,
  generateGrid
} from '../common/componentUtils';

class DateGrid extends Component {
  constructor() {
    super();
  }
  render() {
    const { classes } = this.props;
    const { val, handlerFrom, handlerTo } = this.props;
    return (
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
              value={val.fromDate}
              onChange={handlerFrom}
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
              value={val.toDate}
              onChange={handlerTo}
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    );
  }
}

export default withStyles(styles)(DateGrid);
