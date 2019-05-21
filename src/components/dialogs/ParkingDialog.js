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
import { withNamespaces } from 'react-i18next';
import compose from 'recompose/compose';

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
    const self = this;
    const { parkingData } = self.props;
    self.setState({
      disabled: true
    });

    fetch(`${API.url}/assignParking`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ...self.state,
        parkingId: parkingData.parkingId || parkingData.parking_id
      })
    })
      .then(function(response) {
        self.setState({
          disabled: false,
          notification: true,
          infoMsg: response.ok ? 'Successfully ' + self.state.status : 'Error'
        });
        //show success message and refresh tab only if response os ok , otherwise display error
        self.props.callback({ reload: response.ok });
        if (response.ok && self.props.onSuccess) {
          self.props.onSuccess(); 
        }
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
    const { classes, t } = this.props;
    const { open, callback, status, parkingData } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={primaryTheme}>
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
              {t('assign_parking')}
            </DialogTitle>
            <DialogContent className={classes.dialog}>
              <DialogContentText>
                <AssignParking
                  parkingData={parkingData}
                  status={status}
                  handler={this.handlerChange}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <FormActionUtil
                data={{
                  submitAlone: this.state.submitAlone,
                  disabled: this.state.disabled,
                  onSubmit: this.handleSubmit,
                  buttonName: t('assign')
                }}
              />
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default compose(withStyles(styles), withNamespaces())(ParkingDialog);
