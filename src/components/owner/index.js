import React, { Component } from 'react';
import { TextField, Grid, withStyles } from '@material-ui/core';
import {
  primaryStyles as styles,
  primaryTheme as theme,
  generateGrid
} from '../common/componentUtils';
import classNames from 'classnames';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Icon from '@material-ui/core/es/Icon/Icon';
import { DirectionsCar, Message } from '@material-ui/icons';
import DateGrid from '../common/DateGrid';
import FormActionUtil from '../common/FormActionUtils';
import { API } from '../common/ApiPath';

class Owner extends Component {
  state = {
    disabled: false,
    submitAlone: true,
    fromDate: new Date(),
    toDate: new Date()
  };
  constructor(props) {
    super(props);
  }
  handleChange = name => e => {
    const val = e.target ? e.target.value : e;
    this.setState({ [name]: val });
    this.props.handler(name, val);
  };
  handleSubmit = () => {
    console.log('submitted data in owner screen ==> ', this.state);
    const self = this;
    self.setState({
      disabled: true
    });
    //This is not yet tested. Couldn't able to hit the endpoint
    fetch(`${API.url}/releaseParking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(self.state)
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
  handleFromDateChange = date => {
    this.setState({ fromDate: date });
  };
  handleToDateChange = date => {
    this.setState({ toDate: date });
  };
  render() {
    const { classes, location } = this.props;
    const data = location && location.state && location.state.data;
    return (
      <div className={classNames(classes.marginLeft)}>
        <MuiThemeProvider theme={theme}>
          <DateGrid
            val={this.state}
            handlerFrom={this.handleFromDateChange}
            handlerTo={this.handleToDateChange}
          />
          <Grid container spacing={24} alignItems="center" direction="row">
            <Grid item xs={1} />
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <DirectionsCar />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <TextField
                fullWidth
                label="Parking Gate"
                value={data && data.user_vo.parking.identifier1}
              />
            </Grid>
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <DirectionsCar />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <TextField
                fullWidth={true}
                label="Parking Phase"
                value={data && data.user_vo.parking.identifier2}
              />
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid container spacing={16} alignItems="center" direction="row">
            <Grid item />
            <Grid item />
          </Grid>
          <Grid container spacing={24} alignItems="center" direction="row">
            <Grid item xs={1} />
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <DirectionsCar />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              <TextField
                fullWidth={true}
                label="Parking Slot"
                value={data && data.user_vo.parking.identifier3}
              />
            </Grid>
            <Grid
              item
              xs={1}
              className={classNames(classes.gridFlex, classes.flexEnd)}
            >
              <Icon color="primary">
                <Message />
              </Icon>
            </Grid>
            <Grid item xs={4} className={classNames(classes.gridFlex)}>
              {/*<TextField fullWidth label="Additional Information" />*/}
              <TextField
                fullWidth
                label="Additional Information"
                value={this.state.additionalInfo}
                onChange={this.handleChange('additionalInfo')}
              />
            </Grid>
            {generateGrid(2)}
          </Grid>
          <FormActionUtil
            data={{
              disabled: this.state.disabled,
              submitAlone: this.state.submitAlone,
              onSubmit: this.handleSubmit
            }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Owner);
