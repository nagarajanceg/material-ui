import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CardView from './CardView';

class TabContent extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    const { items, dialog, userId } = this.props;
    return (
      <Grid container spacing={40} justify="flex-start" direction="row">
        {items.map(data => (
          <Grid item xs={12} md={3}>
            <CardView onSuccess={this.props.onSuccess} userId={userId} parkingData={data} dialog={dialog} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default TabContent;
