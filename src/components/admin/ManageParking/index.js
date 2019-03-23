import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';
import { Search } from '@material-ui/icons';
import classNames from 'classnames';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: teal[400]
    },
    spacing: {
      padding: '0.2rem'
    }
  }
});

const styles = () => ({
	gridFlex: {
		'display': 'flex'
	},
  searchField: {
		'flex-basis': '70%'
  },
	flexEnd: {
		'justify-content': 'flex-end'
	}
});

const statusValues = ['All', 'Available', 'Busy', 'Release', 'Assign'];
class ManageParking extends Component {
  state = {
    status: ''
  };
  constructor() {
    super();
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
		const {classes} = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={24} alignItems="flex-end" direction="row">
						<Grid item xs={12} />
						<Grid item xs={12} />
            <Grid item xs={2} className={classNames(classes.gridFlex, classes.flexEnd)}>
							<Search color="primary" />
            </Grid>
            <Grid item xs={10} className={classNames(classes.gridFlex, classes.searchField)}>
              <TextField
                id="park-status"
                select
                label="Status"
                value={this.state.status}
                onChange={this.handleChange('status')}
                SelectProps={{
                  MenuProps: {}
                }}
                fullWidth
              >
                {statusValues.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(ManageParking);
