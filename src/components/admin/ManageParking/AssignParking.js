import React, { Component } from 'react';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { statusValues, statusMapper } from '../../common/config';
import { primaryStyles, generateGrid } from '../../common/componentUtils';
import Icon from '@material-ui/core/es/Icon/Icon';
import { Email, DateRange } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { getParkingDate } from '../../cardView/CardView';
import moment from 'moment/moment'

const styles = () => ({
  ...primaryStyles,
  select: {
    width: '100%'
  }
});

const getDate = (parkingData, dateType) => {
	return parkingData[dateType] ? moment.unix(parkingData[dateType]) : getParkingDate(parkingData, dateType);
};

class AssignParking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: '',
			fromDate: getDate(props.parkingData, 'from_date'),
			toDate: getDate(props.parkingData, 'to_date')
		};
	}
	componentDidMount() {
		this.props.handler('fromDate', this.state.fromDate);
		this.props.handler('toDate', this.state.toDate);
	}
  handleChange = name => e => {
    const val = e.target ? e.target.value : e;
    this.setState({ [name]: val });
    this.props.handler(name, val);
  };
  render() {
    const { classes, status } = this.props;
    return (
      <Grid container spacing={24} alignItems="flex-end" direction="row">
        {generateGrid(1)}

        {status !== 'ASSIGN' && (
          <Grid
            item
            xs={1}
            className={classNames(classes.gridFlex, classes.flexEnd)}
          >
            <Icon color="primary">
              <Email />
            </Icon>
          </Grid>
        )}
        {status !== 'ASSIGN' && (
          <Grid item xs={10} className={classNames(classes.gridFlex)}>
            <TextField
              fullWidth
              label="Enter Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </Grid>
        )}
        {status !== 'ASSIGN' && <Grid item xs={1} />}
        <Grid item xs={1} />
        <Grid item xs={10} className={classNames(classes.gridFlex)}>
          <TextField
            id="parking-status"
            select
            label="Assign Status"
            value={this.state.status}
            onChange={this.handleChange('status')}
            SelectProps={{
              MenuProps: {}
            }}
            fullWidth
          >
            {/*{statusValues.filter(val => val !== 'All').map(option => (*/}
            <MenuItem key={statusMapper[status]} value={statusMapper[status]}>
              {statusMapper[status]}
            </MenuItem>
            {/*))}*/}
          </TextField>
        </Grid>
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
        <Grid item xs={5} className={classNames(classes.gridFlex)}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              label="From"
              value={this.state.fromDate}
              onChange={this.handleChange('fromDate')}
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
        <Grid item xs={5} className={classNames(classes.gridFlex)}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              label="To"
							value={this.state.toDate}
              onChange={this.handleChange('toDate')}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AssignParking);
