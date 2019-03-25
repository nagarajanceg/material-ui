import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Button,
  TextField,
  withStyles
} from '@material-ui/core';
import CloudIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
	gridLeft: {
		'display': 'flex',
		'max-width': '15%'
	},
	gridRight: {
		'flex-basis': '45%'
	},
	fileInput: {
		cursor: 'pointer'
	}
});

class ActionItem extends Component {

	constructor (props) {
		super(props);
		this.state = {
			[`${this.props.id}-fileName`]: ''
		};
	}

	onChange = e => {
		e.persist();
		const files = e.target.files;
		if(files.length > 0) {
			this.setState({ [`${this.props.id}-fileName`]: files[0].name });
		} else {
			this.setState({[`${this.props.id}-fileName`]: ''});
		}
	};

	render () {
		const {classes} = this.props;
		const triggerFileSelect = event => {
			this[`file-sel-${this.props.id}`].click();
		};
		return (
			<Grid container justify="center" alignItems="center" spacing={24}>
				{/*<FormControl margin="dense">*/}
				<Grid item xs={5} justify="flex-end" className={classes.gridLeft}>
					<input
						accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
						id={`${this.props.id}-file-select`}
						type="file"
						ref={(ref) => this[`file-sel-${this.props.id}`] = ref}
						className={classes.input}
						onChange={event => this.onChange(event)}
					/>
					<label htmlFor={`${this.props.id}-file-select`}>
						<Button variant="raised" color="primary" size="medium" component="span" className={classes.button}>
							<CloudIcon/>
							<span style={{padding: 3}}/>
							{this.props.name}
						</Button>
					</label>
				</Grid>
				<Grid item xs={7} className={classes.gridRight}>
					<TextField fullWidth={true} onClick={triggerFileSelect} id={`file-edit-${this.props.id}`}
										 label={this.props.label} value={this.state[`${this.props.id}-fileName`]}
										 inputProps={{ className: classes.fileInput, readOnly: true }} />
					{/*<Input id={props.id} type="file" placeholder={props.name} />*/}
				</Grid>
				{/*</FormControl>*/}
			</Grid>
		);
	}
};

export default withStyles(styles)(ActionItem);
