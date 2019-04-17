import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  Typography,
  IconButton
} from '@material-ui/core';
import {
  Widgets,
  DirectionsCar,
  Dashboard,
  ExitToApp,
  AccountCircle,
  Assignment
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import compose from 'recompose/compose';

const styles = theme => ({
  menuActive: {
    'background-color': 'rgba(0,0,0,0.1)'
  }
});

const getIcon = iconType => {
  switch (iconType) {
    case 'Widgets':
      return <Widgets />;
    case 'DirectionsCar':
      return <DirectionsCar />;
    case 'Dashboard':
      return <Dashboard />;
    case 'ExitToApp':
      return <ExitToApp />;
    case 'AccountCircle':
      return <AccountCircle />;
    case 'Assignment':
      return <Assignment />;
    default:
      return null;
  }
};

class RightNavBar extends Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  state = { selectedId: '' };

  handleMenuClick = item => {
    if (item.id === 'signOut') {
      this.setState({ selectedId: '' });
    } else {
      this.setState({ selectedId: item.id });
    }
    this.routeChange(item.id);
  };

  routeChange = path => {
    this.props.history.push(`/${path}`);
  };
  render() {
    const { classes, t } = this.props;
    let selectedId = this.state.selectedId;
    if (!selectedId) {
      const path = this.props.location.pathname.substring(1);
      if (path !== 'signOut') {
        selectedId = path;
      }
    }
    return (
      <List component="nav">
        <ListItem component="div" align="right">
          {this.props.navItems &&
            this.props.navItems.map(item => (
              <ListItemText inset>
                <Typography color="inherit" variant={item.variant}>
                  <IconButton
                    color="inherit"
                    onClick={() => this.handleMenuClick(item)}
                    className={selectedId === item.id ? classes.menuActive : ''}
                  >
                    {getIcon(item.icon)}
                    <span style={{ fontSize: '0.9rem', paddingLeft: '10px' }}>
                      {t(item.title)}
                    </span>
                  </IconButton>
                </Typography>
              </ListItemText>
            ))}
        </ListItem>
      </List>
    );
  }
}

RightNavBar.propTypes = {
  navItems: PropTypes.array
};

export default compose(withStyles(styles), withNamespaces())(RightNavBar);
