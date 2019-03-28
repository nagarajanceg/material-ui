import React from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Send from '@material-ui/icons/Send';
import { Button, Grid } from '@material-ui/core';

const downloadTemplate = (props) => {
  if (props.data.id === 'manageData') {
		window.location.assign('http://13.210.217.90:9080/api/v1/getManageDataTemplate');
	} else if (props.data.id === 'massManage') {
		window.location.assign('http://13.210.217.90:9080/api/v1/getMassManageTemplate');
	}
};
function FormActionUtils(props) {
  return (
    <Grid container justify="center" alignItems="center" spacing={24}>
      <Grid item>
        <Button variant="contained" color="primary" size="medium" onClick={() => downloadTemplate(props)}>
          Download <span style={{ padding: 3 }} /> <CloudDownload />
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" size="medium" onClick={props.data.onSubmit}>
          submit <span style={{ padding: 3 }} /> <Send />
        </Button>
      </Grid>
    </Grid>
  );
}
export default FormActionUtils;
