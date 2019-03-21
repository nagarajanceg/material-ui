import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  TextField
} from '@material-ui/core';
import CloudIcon from '@material-ui/icons/CloudUpload';

const ActionItem = props => {
  return (
    <Grid container justify="center" alignItems="center" spacing={24}>
      {/*<FormControl margin="dense">*/}

      <Grid item>
        <label htmlFor={props.id}>
          <Button variant="contained" color="primary" size="medium">
            <CloudIcon />
            <span style={{ padding: 3 }} />
            {props.name}
            {/*<input type="file" style={{ display: 'hidden' }} />*/}
          </Button>
        </label>
      </Grid>
      <Grid item>
        <TextField fullwidth={'true'} id={props.id} label={props.id} />
        {/*<Input id={props.id} type="file" placeholder={props.name} />*/}
      </Grid>
      {/*</FormControl>*/}
    </Grid>
  );
};

export default ActionItem;
