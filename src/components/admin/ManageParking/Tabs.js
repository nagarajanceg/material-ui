import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  Paper,
  Typography,
  withStyles,
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
      <div className={classes.tabContainer}>
        <Paper>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
          >
            {items &&
              Object.keys(items).map(key => {
              	let slots = 0;
              	items[key].forEach(data => slots += Number(data.slot || 0));
                return <Tab value={key} label={<TabBadge name={key} slots={slots} />} />
              })}
          </Tabs>
        </Paper>
        <TabContainer>
          {items[value] && <TabContent items={items[value]} name={value}/>}
        </TabContainer>
      </div>
    );
  }
}

TabSection.propTypes = {
  items: PropTypes.object
};

export default withStyles(styles)(TabSection);
