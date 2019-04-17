import React from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Send from '@material-ui/icons/Send';
import { Button, Grid } from '@material-ui/core';
import { API } from './ApiPath';
import { withNamespaces } from 'react-i18next';

const downloadTemplate = props => {
  if (props.data.id === 'manageData') {
    window.location.assign(`${API.url}/getManageDataTemplate`);
  } else if (props.data.id === 'massManage') {
    window.location.assign(`${API.url}/getManageDataTemplate`);
  }
};
function FormActionUtils(props) {
  const { t } = props;
  return (
    <Grid container justify="center" alignItems="center" spacing={24}>
      {!props.data.submitAlone && (
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => downloadTemplate(props)}
          >
            {t('download')} <span style={{ padding: 3 }} /> <CloudDownload />
          </Button>
        </Grid>
      )}
      <Grid item>
        <Button
          variant="contained"
          disabled={props.data.disabled}
          color="primary"
          size="medium"
          onClick={props.data.onSubmit}
        >
          {props.data.buttonName ? (
            t('props.data.buttonName')
          ) : (
            t('submit')
          )}{' '}
          <span style={{ padding: 3 }} /> <Send />
        </Button>
      </Grid>
    </Grid>
  );
}
export default withNamespaces()(FormActionUtils);
