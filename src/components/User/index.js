import React, { Component } from 'react';
import { TextField, Grid, withStyles } from '@material-ui/core';
import {
  primaryStyles as styles,
  primaryTheme as theme,
  generateGrid
} from '../common/componentUtils';
import classNames from 'classnames';

class User extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    const { classes } = this.props;
    return <div> User Screen</div>;
  }
}

export default withStyles(styles)(User);
