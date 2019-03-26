import React from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Send from '@material-ui/icons/Send';
import { Button, Grid } from '@material-ui/core';

function FormActionUtils() {
  return (
    <Grid container justify="center" alignItems="center" spacing={24}>
      <Grid item>
        <Button variant="contained" color="primary" size="medium">
          Download <span style={{ padding: 3 }} /> <CloudDownload />
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" size="medium">
          submit <span style={{ padding: 3 }} /> <Send />
        </Button>
      </Grid>
    </Grid>
  );
}
export default FormActionUtils;
