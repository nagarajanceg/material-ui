import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import FormActionUtil from '../../common/FormActionUtils';
import FileUploader from '../../common/FileUploader';
import { API } from '../../common/ApiPath';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: teal[400]
    }
  }
});
class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
			files: []
    };
  }
  setSelectedFiles = (id, file) => {
    const files = this.state.files || [];
    const isFileExists = files.filter(item => item.id === id);
    if (isFileExists && isFileExists.length === 0) {
      files.push({ id, file });
      this.setState({ files });
    }
  };
	removeSelectedFiles = (id) => {
		const allFiles = this.state.files || [];
		const files = allFiles.filter(item => item.id !== id);
    this.setState({ files });
	};
  handleSubmit = () => {
    const files = this.state.files;
    const self = this;
    if (files && files.length > 0) {
      var data = new FormData();
      this.setState({
        disabled: true
      });
      files.forEach(fileData => {
        data.append(fileData.id, fileData.file);
      });
      fetch(API.url + '/manageData', {
        method: 'POST',
        body: data
      })
        .then(function(response) {
          self.setState({
            disabled: false,
            notification: true,
            infoMsg: response.ok ? 'Upload successful' : 'Upload failed'
          });
          console.log(response);
        })
        .catch(function(error) {
          self.setState({
            notification: true,
            infoMsg: 'Upload failed',
            disabled: false
          });
          console.log('Request failed', error);
        });
    }
  };
  handleNotificationClose = () => {
    this.setState({ notification: false });
  };
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Snackbar
            open={this.state.notification}
            onClose={this.handleNotificationClose}
            TransitionComponent={Fade}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{this.state.infoMsg}</span>}
          />
          <Grid container spacing={24} justify="center" direction="column">
            <Grid item />
            <FileUploader
              name="Browse"
              id="userData"
              label="User Data"
              onChange={this.setSelectedFiles}
              onClear={this.removeSelectedFiles}
            />
            <FileUploader
              name="Browse"
              id="parkingData"
              label="Parking Data"
              onChange={this.setSelectedFiles}
							onClear={this.removeSelectedFiles}
            />
            {/*<FileUploader name="Browse" id="assignment" label="Assignment" />*/}
            <Grid item />
            <Grid item />
            <Grid item xs={12}>
              <FormActionUtil
                data={{
                  id: 'manageData',
                  disabled: this.state.disabled,
                  onSubmit: this.handleSubmit
                }}
              />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Manage;
