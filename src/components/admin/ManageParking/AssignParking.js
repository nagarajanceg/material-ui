import React, { Component } from 'react';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { statusValues } from '../../common/config';
import { primaryStyles, generateGrid } from '../../common/componentUtils';
import Icon from '@material-ui/core/es/Icon/Icon';
import { Email } from '@material-ui/icons';

const styles = () => ({
  ...primaryStyles,
	select: {
  	width: '100%'
	}
});

class AssignParking extends Component {
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
			</Grid>
    );
  }
}

export default withStyles(styles)(AssignParking);
