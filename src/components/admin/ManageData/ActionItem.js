import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/CloudUpload';

const ActionItem = props => {
  return (
    <Grid container justify="center" alignItems="center" spacing={24}>
      <Grid item>
        <Button variant="contained" color="primary" size="medium">
          <CloudIcon />
          <span style={{ padding: 2 }} />
          {props.name}
        </Button>
      </Grid>
      <Grid item>
        <TextField fullwidth={'true'} id={props.id} label={props.id} />
      </Grid>
    </Grid>
  );
};

export default ActionItem;
