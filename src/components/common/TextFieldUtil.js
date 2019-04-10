import React, { Component } from 'react';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';

const labelToLowercase = str => str.toLowerCase().replace(/ /g, '_');

export class TextFieldUtil extends Component {
  constructor() {
    super();
  }
  render() {
    const { label, val, handler } = this.props;
    const field = labelToLowercase(label);
    return (
      <TextField
        id={field}
        label={label}
        placeholder={`Enter ${label}`}
        value={val}
        onChange={handler(field)}
        fullWidth
      />
    );
  }
}

export class TextFieldWithOption extends Component {
  render() {
    const { label, value, handler, menuOptions } = this.props;
    const field = labelToLowercase(label);
    return (
      <TextField
        id={field}
        select
        label={label}
        value={value}
        onChange={handler(field)}
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

// export class TextFieldWithOption;
