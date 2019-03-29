import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import FormActionUtil from '../../common/FormActionUtils';
import FileUploader from '../../common/FileUploader';
import {API} from '../../common/ApiPath';

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
		this.state = {};
  }
  setSelectedFiles = (id, file) => {
  	const files = this.state.files || [];
  	files.push({ id, file });
  	this.setState({ files });
	};
	handleSubmit = () => {
		const files = this.state.files;
		if (files && files.length > 0) {
			var data = new FormData();
			files.forEach(fileData => {
				data.append(fileData.id, fileData.file);
			})
			fetch(API.url+'/manageData', {
				method: 'POST',
				body: data
			}).then(function(response) {
					console.log(response);
				}).catch(function(error) {
				console.log('Request failed', error)
			});
		}
	};
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={24} justify="center" direction="column">
            <Grid item />
            <FileUploader name="Browse" id="userData" label="User Data" onChange={this.setSelectedFiles} />
            <FileUploader name="Browse" id="parkingData" label="Parking Data" onChange={this.setSelectedFiles} />
            {/*<FileUploader name="Browse" id="assignment" label="Assignment" />*/}
            <Grid item />
            <Grid item />
            <Grid item xs={12}>
              <FormActionUtil data={{ id: 'manageData', onSubmit: this.handleSubmit }} />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Manage;
