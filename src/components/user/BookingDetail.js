import React, { Component } from 'react';
import { TextField, Grid, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { primaryStyles } from '../common/componentUtils';
import Icon from '@material-ui/core/es/Icon/Icon';
import { DateRange, Message } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

const styles = () => ({
  ...primaryStyles,
  select: {
    width: '100%'
  }
});

class BookingDetail extends Component {
  state = {
    fromDate: new Date(),
    additionalInfo: ''
  };
  constructor() {
    super();
  }
  
  handleChange = name => e => {
    const val = e.target ? e.target.value : e;
    this.setState({ [name]: val });
    this.props.handler(name, val);
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} alignItems="flex-end" direction="row">
        <Grid
          item
          xs={1}
          className={classNames(classes.gridFlex, classes.flexEnd)}
        >
          <Icon color="primary">
            <DateRange />
          </Icon>
        </Grid>
        <Grid item xs={11}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              label="From"
              value={this.state.fromDate}
              onChange={this.handleChange('fromDate')}
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
        <Grid item xs={11}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              label="To"
              value={this.state.toDate}
              onChange={this.handleChange('toDate')}
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
            <Message />
          </Icon>
        </Grid>
        <Grid item xs={11} className={classNames(classes.gridFlex)}>
          <TextField
            fullWidth
            label="Additional Information"
            value={this.state.additionalInfo}
            onChange={this.handleChange('additionalInfo')}
          />
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(BookingDetail);
