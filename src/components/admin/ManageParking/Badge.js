import React, { Component } from 'react';
import { Typography, Badge, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  badgeText: {
    transform: 'none',
    position: 'relative'
  }
});

class TabBadge extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Badge className={classes.padding} color="primary" badgeContent="4 open">
        <Typography className={classes.badgeText}>{this.props.name}</Typography>
      </Badge>
    );
  }
}

export default withStyles(styles)(TabBadge);
