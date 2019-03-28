import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, withStyles } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  gridLeft: {
    display: 'flex',
    'max-width': '15%'
  },
  gridRight: {
    'flex-basis': '45%'
  },
  fileInput: {
    cursor: 'pointer'
  }
});

class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [`${this.props.id}-fileName`]: ''
    };
  }
  sendRequest = (file)=> {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    const formData = new FormData();
    formData.append("file", file, file.name);

    req.open("POST", "http://localhost:3100/file");
    req.send(formData);
  });
}
  onChange = e => {
    e.persist();
    const files = e.target.files;
    if (files.length > 0) {
      console.log('files Content', files);
      this.setState({ [`${this.props.id}-fileName`]: files[0].name });
      //url = http://13.210.217.90:9080/api/v1/manageData
      // fetch('http://localhost:3100/file', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     Accept: 'application/json'
      //   },
      //   body: files
      // })
      //   .then(r => r.json())
      //   .then(res => {
      //     console.log('res received ==>', res);
      //   });
      this.sendRequest(files[0]).then(
        r => r.json
      ).then(res => {
        console.log('res received ==>', res);
      });
			/*fetch('http://13.210.217.90:9080/echo', {mode: 'cors'})
				.then(function(response) {
					console.log(response);
				}).catch(function(error) {
				console.log('Request failed', error)
			});*/
    } else {
      this.setState({ [`${this.props.id}-fileName`]: '' });
    }
  };

  render() {
    const { classes } = this.props;
    const triggerFileSelect = event => {
      this[`file-sel-${this.props.id}`].click();
    };
    return (
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center" spacing={24}>
          <Grid item xs={5} justify="flex-end" className={classes.gridLeft}>
            <input
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,
              application/javascript
              "
              id={`${this.props.id}-file-select`}
              type="file"
              ref={ref => (this[`file-sel-${this.props.id}`] = ref)}
              className={classes.input}
              onChange={event => this.onChange(event)}
            />
            <label htmlFor={`${this.props.id}-file-select`}>
              <Button
                variant="raised"
                color="primary"
                size="medium"
                component="span"
                className={classes.button}
              >
                <CloudIcon />
                <span style={{ padding: 3 }} />
                {this.props.name}
              </Button>
            </label>
          </Grid>
          <Grid item xs={7} className={classes.gridRight}>
            <TextField
              fullWidth={true}
              onClick={triggerFileSelect}
              id={`file-edit-${this.props.id}`}
              label={this.props.label}
              value={this.state[`${this.props.id}-fileName`]}
              inputProps={{ className: classes.fileInput, readOnly: true }}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FileUploader);
