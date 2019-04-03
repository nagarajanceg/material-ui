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
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
// import Notification from '../common/Notification';

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
    disabled: false,
    fromDate: new Date(),
    toDate: new Date()
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
          disabled: false,
          notification: true,
          infoMsg: response.ok ? 'Successfully Assigned' : 'Assign Error'
        });
        //show success message and refresh tab only if response os ok , otherwise display error
        self.props.callback({ reload: response.ok });
      })
      .catch(function(err) {
        self.setState({
          disabled: false,
          notification: true,
          infoMsg: 'Assign Error'
        });
        console.log('error ==> ', err);
      });
  };
  handlerChange = (name, value) => {
    this.setState({ [name]: value });
  };
  handleNotificationClose = () => {
    this.setState({ notification: false });
  };
  render() {
    const { classes } = this.props;
    const { open, callback, status } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={primaryTheme}>
          {/*<Notification response={this.state.response} infoMsg={this.state.infoMsg} />*/}
          <Snackbar
            open={this.state.notification}
            onClose={this.handleNotificationClose}
            TransitionComponent={Fade}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{this.state.infoMsg}</span>}
          />
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
