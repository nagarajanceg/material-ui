import React, { Component } from 'react';
import { TextField, Grid, List,ListItem, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { primaryStyles } from '../common/componentUtils';
import Icon from '@material-ui/core/es/Icon/Icon';
import { DateRange, Message } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

const styles = () => ({
  ...primaryStyles,
  select: {
    width: '100%'
  }
});

class BookingInfo extends Component {
  state = {
    status: '',
    fromDate: new Date()
  };
  constructor() {
    super();
  }
  handleFromDateChange = date => {
    this.setState({ fromDate: date });
  };
  handleToDateChange = date => {
    this.setState({ toDate: date });
  };
  render() {
    const { classes } = this.props;
    return (
      // <Grid container spacing={24} alignItems="flex-end" direction="column">
        
      // </Grid>
      <List Component="ul">
        <ListItem>
          Owner Name
          </ListItem>
          <ListItem>
          Days Available
          </ListItem>
          <ListItem>
            Additional Info
            </ListItem>
        </List>
    );
  }
}
export default withStyles(styles)(BookingInfo);
