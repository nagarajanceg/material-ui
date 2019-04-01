import React, { Component } from 'react';
import { Tab, Tabs, Paper, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import TabBadge from './Badge';
import TabContent from './TabContent';
import { openStatus } from '../common/config';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  tabContainer: {
    width: '100%',
    margin: 'auto'
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const getOpenSlotsCount = items => {
  let slots = 0;
  items.forEach(data => {
    if (openStatus.includes(data.status)) {
      slots += 1;
    }
  });
  return slots;
};

class TabSection extends Component {
  state = {
    value: ''
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, items, dialog } = this.props;
    const value = this.state.value
      ? this.state.value
      : items && Object.keys(items)[0];
    return (
      <div className={classes.tabContainer}>
        <Paper>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
          >
            {items &&
              Object.keys(items).map(key => {
                return (
                  <Tab
                    value={key}
                    label={
                      <TabBadge
                        name={key}
                        slots={getOpenSlotsCount(items[key])}
                      />
                    }
                  />
                );
              })}
          </Tabs>
        </Paper>
        <TabContainer>
          {items[value] && <TabContent items={items[value]} dialog={dialog} />}
        </TabContainer>
      </div>
    );
  }
}

TabSection.propTypes = {
  items: PropTypes.object
};

export default withStyles(styles)(TabSection);
