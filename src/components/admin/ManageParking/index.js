import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import classNames from 'classnames';
import Tabs from '../../cardView/Tabs';
import styled from '@material-ui/styles/styled';
import { statusValues } from '../../common/config';
import {
  generateGrid,
  primaryStyles as styles,
  primaryTheme as theme
} from '../../common/componentUtils';
import { API } from '../../common/ApiPath';

const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '65%'
});

class ManageParking extends Component {
  state = {
    status: '',
    items: {},
    dialog: {
      assign: true
    }
  };
  constructor() {
    super();
  }
  componentDidMount() {
    var self = this;
    fetch(`${API.url}/getParkings`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('error data response');
        }
      })
      .then(json => {
        self.setState({
          items: json
        });
      })
      .catch(error => console.log('error in response', error));
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
              <Grid
                item
                xs={1}
                className={classNames(classes.gridFlex, classes.flexEnd)}
              >
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
              <Tabs {...this.state} />
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(ManageParking);
