import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Grid, MenuItem, withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import classNames from 'classnames';
import Tabs from '../../cardView/Tabs';
import styled from '@material-ui/styles/styled';
import { statusValues } from '../../common/config';
import {
  generateGrid,
  primaryStyles as styles,
  primaryTheme as theme
} from '../../common/componentUtils';
import { API } from '../../common/ApiPath';
import { fetchResource } from '../../common/ApiHelper';
import compose from 'recompose/compose';
import { withNamespaces } from 'react-i18next';

const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '65%'
});

class ManageParking extends Component {
  state = {
    status: '',
    items: {},
    dialog: {
      assign: true
    }
  };
  constructor() {
    super();
  }
  componentDidMount() {
    var self = this;
    fetchResource(`${API.url}/getParkings`, null, self.onSuccess);
  }
  onSuccess = items => {
    this.setState({ items });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes, t } = this.props;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} alignItems="flex-end" direction="row">
              <Grid
                item
                xs={1}
                className={classNames(classes.gridFlex, classes.flexEnd)}
              >
                <Search color="primary" />
              </Grid>
              <Grid item xs={10} className={classNames(classes.gridFlex)}>
                <TextField
                  id="park-status"
                  select
                  label={t('status')}
                  value={this.state.status}
                  onChange={this.handleChange('status')}
                  SelectProps={{
                    MenuProps: {}
                  }}
                  fullWidth
                >
                  {statusValues.map(option => (
                    <MenuItem key={option} value={option}>
                      {t(option)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={1} />
              {generateGrid(2)}
              <Tabs {...this.state} />
            </Grid>
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}
export default compose(withStyles(styles), withNamespaces())(ManageParking);
