import React, { Component } from 'react';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { statusValues } from '../../common/config';
import { primaryStyles, generateGrid } from '../../common/componentUtils';
import Icon from '@material-ui/core/es/Icon/Icon';
import { Email, DateRange } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';


const styles = () => ({
  ...primaryStyles,
	select: {
  	width: '100%'
	}
});

class AssignParking extends Component {
	state = {
		status: '',
		fromDate: new Date()
	};
	constructor() {
		super();
	}
	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};
	handleFromDateChange = date => {
		this.setState({ fromDate: date });
	};
	handleToDateChange = date => {
		this.setState({ toDate: date });
	};
  render() {
    const { classes } = this.props;
    return (
			<Grid container spacing={24} alignItems="flex-end" direction="row">
				{generateGrid(1)}
				<Grid item xs={1} className={classNames(classes.gridFlex, classes.flexEnd)}>
					<Icon color="primary"><Email /></Icon>
				</Grid>
				<Grid item xs={10} className={classNames(classes.gridFlex)}>
					<TextField fullWidth label="Enter Email"/>
				</Grid>
				<Grid item xs={1} />
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
						{statusValues.filter(val => val !== 'All').map(option => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={1} className={classNames(classes.gridFlex, classes.flexEnd)}>
					<Icon color="primary"><DateRange /></Icon>
				</Grid>
				<Grid item xs={5} className={classNames(classes.gridFlex)}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<DatePicker
								margin="normal"
								label="From"
								value={this.state.fromDate}
								onChange={this.handleFromDateChange}
							/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={1} className={classNames(classes.gridFlex, classes.flexEnd)}>
					<Icon color="primary"><DateRange /></Icon>
				</Grid>
				<Grid item xs={5} className={classNames(classes.gridFlex)}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<DatePicker
								margin="normal"
								label="To"
								value={this.state.toDate}
								onChange={this.handleToDateChange}
							/>
					</MuiPickersUtilsProvider>
				</Grid>
			</Grid>
    );
  }
}

export default withStyles(styles)(AssignParking);
