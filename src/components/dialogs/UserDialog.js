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
import BookingInfo from '../user/BookingInfo';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import { primaryTheme } from '../common/componentUtils';
import FormActionUtil from '../common/FormActionUtils';
import Send from '@material-ui/icons/Send';
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
    // this.handlerChange = this.handlerChange.bind(this);
  }
  handleSubmit = () => {
    console.log('submitted data ==> ', this.state);
    const self = this;
    self.setState({
      disabled: true
    });
    //This is not yet tested. Couldn't able to hit the endpoint
    fetch(`${API.url}/reserveParking`, {
      method: 'PUT',
      body: self.state
    })
      .then(function(response) {
        self.setState({
          disabled: false
        });
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
    return (
      <div>
        <MuiThemeProvider theme={primaryTheme}>
          <Dialog
            open={this.props.open}
            onClose={this.props.callback}
            PaperProps={{ className: classes.dialogPaper }}
          >
            <DialogTitle className={classes.dialogTitle}>
              Booking details
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

export default withStyles(styles)(UserDialog);
