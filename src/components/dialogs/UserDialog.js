import React, { Component } from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  withStyles
} from '@material-ui/core';
import BookingDetail from '../user/BookingDetail';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import { primaryTheme } from '../common/componentUtils';
import FormActionUtil from '../common/FormActionUtils';
import { API } from '../common/ApiPath';
import get from 'lodash/get';
import Fade from '@material-ui/core/Fade/index';
import Snackbar from '@material-ui/core/Snackbar';
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

class UserDialog extends Component {
  state = {
    disabled: false,
    submitAlone: true,
    fromDate: new Date(),
    additionalInfo: '',
    toDate: new Date()
  };
  constructor(props) {
    super(props);
  }
  handleSubmit = () => {
    console.log('submitted data ==> ', this.state);
    const self = this;
    const { userId, parkingId, data } = self.props;
    self.setState({
      disabled: true
    });
    //This is not yet tested. Couldn't able to hit the endpoint
    fetch(`${API.url}/reserveParking`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ...self.state,
        userId,
        parkingId,
        releaseId: get(data, 'releases[0].release_id')
      })
    })
      .then(function(response) {
        self.setState({
          disabled: false,
          notification: true,
          infoMsg: response.ok ? 'Successfully Assigned' : 'Assign Error'
        });
        self.props.callback();
        console.log('response ==>', response);
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
  handleNotificationClose = () => {
    this.setState({ notification: false });
  };
  handlerChange = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    const { classes, t } = this.props;
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
            open={this.props.open}
            onClose={this.props.callback}
            PaperProps={{ className: classes.dialogPaper }}
          >
            <DialogTitle className={classes.dialogTitle}>
              {t('booking_details')}
            </DialogTitle>
            <DialogContent className={classes.dialog}>
              <DialogContentText>
                <BookingDetail handler={this.handlerChange} />
                {/*<BookingInfo />*/}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <FormActionUtil
                data={{
                  submitAlone: this.state.submitAlone,
                  disabled: this.state.disabled,
                  onSubmit: this.handleSubmit
                }}
              />
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default compose(withStyles(styles), withNamespaces())(UserDialog);
