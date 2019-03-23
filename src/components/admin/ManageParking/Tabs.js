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

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 3}px`
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
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    // const { classes } = this.props;
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label={<TabBadge name="Gate-1" />} />
          <Tab label={<TabBadge name="Gate-2" />} />
          <Tab label={<TabBadge name="Gate-3" />} />
        </Tabs>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </Paper>
    );
  }
}

export default withStyles(styles)(TabSection);
