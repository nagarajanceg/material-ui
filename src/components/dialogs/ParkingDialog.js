import React from 'react';
import {
	Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
	Dialog,
	withStyles,
} from '@material-ui/core';

const styles = theme => ({
	title: {
	}
});

class ParkingDialog extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Dialog
					open={this.props.open}
					onClose={this.props.callback}
				>
					<DialogTitle  className={classes.title}>Title</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Body Text
						</DialogContentText>
						<TextField
							fullWidth value={this.props.parkingId}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Assign
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(ParkingDialog);