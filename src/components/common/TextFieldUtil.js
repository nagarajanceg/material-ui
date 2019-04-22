import React, { Component } from 'react';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';

export class TextFieldUtil extends Component {
  constructor() {
    super();
  }
  render() {
    const { label, val, handler, id } = this.props;
    return (
      <TextField
        id={id}
        label={label}
        placeholder={`Enter ${label}`}
        value={val}
        onChange={handler(id)}
        fullWidth
      />
    );
  }
}

export class TextFieldWithOption extends Component {
  render() {
    const { label, value, handler, menuOptions, id } = this.props;
    return (
      <TextField
        id={id}
        select
        label={label}
        value={value}
        onChange={handler(id)}
        SelectProps={{
          MenuProps: {}
        }}
        fullWidth
      >
        {menuOptions.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}