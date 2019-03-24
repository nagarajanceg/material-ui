import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  Paper,
  Typography,
  withStyles,
  Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';
import TabBadge from './Badge';
import TabContent from './TabContent';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  tabContainer: {
    width: '100%'
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class TabSection extends Component {
  state = {
    value: ''
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, items } = this.props;
    const value = this.state.value
      ? this.state.value
      : items && Object.keys(items)[0];
    return (
      <Paper className={classes.tabContainer}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {items &&
            Object.keys(items).map(key => (
              <Tab value={key} label={<TabBadge name={key} />} />
            ))}
        </Tabs>
        <TabContainer>
          {items[value] && <TabContent items = {items[value]}/>}
            {/*items[value].map(data => <div>{data.parkingId}</div>)}*/}
        </TabContainer>
      </Paper>
    );
  }
}

TabSection.propTypes = {
  items: PropTypes.object
};

export default withStyles(styles)(TabSection);
