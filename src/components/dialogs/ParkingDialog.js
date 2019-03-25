import React from 'react';
import {
	Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
	Dialog,
	withStyles,
} from '@material-ui/core';
import AssignParking from '../admin/ManageParking/AssignParking';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import { primaryTheme } from '../common/componentUtils';
import Send from '@material-ui/icons/Send';

const styles = theme => ({
	dialogPaper: {
		width: '100%'
	},
	dialogTitle: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	submitLabel: {
		'padding-right': '10px'
	}
});

class ParkingDialog extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<MuiThemeProvider theme={primaryTheme}>
					<Dialog
						open={this.props.open}
						onClose={this.props.callback}
						PaperProps={{className: classes.dialogPaper}}
					>
						<DialogTitle  className={classes.dialogTitle}>Assign Parking</DialogTitle>
						<DialogContent className={classes.dialog}>
							<DialogContentText>
								<AssignParking />
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button variant="contained" color="primary" size="medium">
								<div className={classes.submitLabel}>Assign</div><Send />
							</Button>
						</DialogActions>
					</Dialog>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default withStyles(styles)(ParkingDialog);