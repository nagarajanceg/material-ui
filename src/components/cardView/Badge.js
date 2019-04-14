import React, { Component } from 'react';
import { Typography, Badge, withStyles } from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  badge: {
    transform: 'scale(1) translate(10%, -50%)',
    position: 'relative'
  },
  badgeText: {
    transform: 'none',
    display: 'inline-flex'
  }
});

class TabBadge extends Component {
  render() {
    const { classes, slots } = this.props;
    return (
      <div>
        <Typography className={classes.badgeText}>{this.props.name}</Typography>
        {slots && (
          <Badge
            classes={{ badge: classes.badge }}
            color="primary"
            badgeContent={`${slots} Parking Found`}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(TabBadge);
