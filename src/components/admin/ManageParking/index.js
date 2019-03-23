import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import { pink, teal } from '@material-ui/core/colors';
import { Search } from '@material-ui/icons';
import classNames from 'classnames';
import Tabs from './Tabs';
import styled from '@material-ui/styles/styled';
import { parkingData } from '../../../mocks/parkings';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
			main: pink[300]
    }
  }
});

const styles = () => ({
  gridFlex: {
    display: 'flex'
  },
  flexEnd: {
    'justify-content': 'flex-end'
  }
});
const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: '0 auto',
  width: '70%'
});

const statusValues = ['All', 'Available', 'Busy', 'Release', 'Assign'];

class ManageParking extends Component {
  state = {
    status: '',
		items: parkingData
  };
  constructor() {
    super();
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
		const generateGrid = count => {
			const elements = [];
			for (var i=0; i<count; i++) {
				elements.push(<Grid item xs={12} />);
			}
			return elements;
		};
		const {classes} = this.props;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
							<Grid item xs={1} className={classNames(classes.gridFlex, classes.flexEnd)}>
								<Search color="primary" />
							</Grid>
              <Grid item xs={10} className={classNames(classes.gridFlex)}>
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
							<Grid item xs={1} />
							{generateGrid(2)}
							<Tabs items={this.state.items} />
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(ManageParking);
