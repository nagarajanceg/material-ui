import React from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  withStyles
} from '@material-ui/core';
import AssignParking from '../admin/ManageParking/AssignParking';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import { primaryTheme } from '../common/componentUtils';
import Send from '@material-ui/icons/Send';
import FormActionUtil from '../common/FormActionUtils';
import { API } from '../common/ApiPath';

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
  state = {
    submitAlone: true,
    disabled: false
  };
  handleSubmit = () => {
    console.log('submit parking dialog', this.state);
    const self = this;
    const { data } = self.props;
    self.setState({
      disabled: true
    });

    //This is not yet tested. Couldn't able to hit the endpoint
    fetch(`${API.url}/assignParking`, {
      method: 'put',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
      body: JSON.stringify({ ...self.state, parkingId: data.parkingId })
    })
      .then(function(response) {
        self.setState({
          disabled: false
        });
				self.props.callback();
        console.log('response ==>', response);
      })
      .catch(function(err) {
        self.setState({
          disabled: false
        });
        console.log('error ==> ', err);
      });
  };
  handlerChange = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    const { classes } = this.props;
    const { open, callback, status } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={primaryTheme}>
          <Dialog
            open={open}
            onClose={callback}
            PaperProps={{ className: classes.dialogPaper }}
          >
            <DialogTitle className={classes.dialogTitle}>
              Assign Parking
            </DialogTitle>
            <DialogContent className={classes.dialog}>
              <DialogContentText>
                <AssignParking status={status} handler={this.handlerChange} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/*<Button variant="contained" color="primary" size="medium">
								<div className={classes.submitLabel}>Assign</div><Send />
							</Button>*/}
              <FormActionUtil
                data={{
                  submitAlone: this.state.submitAlone,
                  disabled: this.state.disabled,
                  onSubmit: this.handleSubmit,
                  buttonName: 'Assign'
                }}
              />
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(ParkingDialog);
