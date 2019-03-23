import React, { Component } from 'react';
import { Typography, Badge, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 3}px`
  }
});

class TabBadge extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Badge className={classes.padding} color="secondary" badgeContent="4open">
        <Typography>{this.props.name}</Typography>
      </Badge>
    );
  }
}

export default withStyles(styles)(TabBadge);
