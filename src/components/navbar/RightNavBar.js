import React, { Component } from 'react';
import Icon from '@material-ui/core/es/Icon/Icon';
import { ArrowDropDown } from '@material-ui/icons';
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
import { PropTypes, instanceOf } from 'prop-types';
import { withNamespaces } from 'react-i18next';
import compose from 'recompose/compose';
import { Popover } from '../common/Popover';
import { withCookies, Cookies } from 'react-cookie';
import { API } from '../common/ApiPath';
import ReactCountryFlag from 'react-country-flag';

const styles = theme => ({
  menuActive: {
    'background-color': 'rgba(0,0,0,0.1)'
  },
  navbar: {
    paddingLeft: '8px',
    paddingRight: '8px'
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
const getDomain = () => {
  return window.location.href
    .replace('http://', '')
    .replace('https://', '')
    .split(/[/?#]/)[0];
};
const languageIcon = val => {
  if (val == 'en') {
    val = 'us';
  }
  return <ReactCountryFlag code={val} />;
};
class RightNavBar extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.routeChange = this.routeChange.bind(this);
  }
  state = { selectedId: '' };

  handleMenuClick = (id, type) => {
    const { cookies } = this.props;
    this.setState({ selectedId: id === 'signOut' ? '' : id });
    if (type === 'dropdown') {
      this.setState(state => ({ [`${id}_open`]: !state[`${id}_open`] }));
    } else {
      if (this.state.language_open === true) {
        console.log(cookies.get('language'));
        // cookies.remove('language');
        if (cookies.get('language') !== id) {
          cookies.set('language', id, [{ domain: getDomain(), path: '/' }]);
          const email = cookies.get('user_email');
          fetch(`${API.url}/changeLanguage?lang=${id}&email=${email}`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          })
            .then(data => data.json())
            .then(res => {
              console.log('Language Changed ', res);
            });
        }
      } else {
        this.routeChange(id);
      }
    }
  };

  handlePopoverClose = id => {
    this.setState(state => ({ [`${id}_open`]: !state[`${id}_open`] }));
  };

  routeChange = path => {
    this.props.history.push(`/${path}`);
  };
  render() {
    const { classes, t, cookies } = this.props;
    let selectedId = this.state.selectedId;
    if (!selectedId) {
      const path = this.props.location.pathname.substring(1);
      if (path !== 'signOut') {
        selectedId = path;
      }
    }
    return (
      <List component="nav">
        <ListItem component="div" className={classes.navbar} align="right">
          {this.props.navItems &&
            this.props.navItems.map(item => (
              <ListItemText inset>
                <Typography color="inherit" variant={item.variant}>
                  <IconButton
                    color="inherit"
                    buttonRef={node => {
                      this[item.id] = node;
                    }}
                    onClick={() => this.handleMenuClick(item.id, item.type)}
                    className={selectedId === item.id ? classes.menuActive : ''}
                  >
                    {item.id === 'language' ? (
                      languageIcon(cookies.get('language'))
                    ) : (
                      getIcon(item.icon)
                    )}
                    <span style={{ fontSize: '0.8rem', paddingLeft: '3px' }}>
                      {t(item.title)}
                    </span>
                    {item.type === 'dropdown' && (
                      <React.Fragment>
                        <Icon color="white">
                          <ArrowDropDown />
                        </Icon>
                        <Popover
                          id={item.id}
                          menuOptions={item.options}
                          isOpen={this.state[`${item.id}_open`]}
                          anchor={this[item.id]}
                          onClose={this.handlePopoverClose}
                          onSelect={this.handleMenuClick}
                        />
                      </React.Fragment>
                    )}
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

export default compose(withStyles(styles), withNamespaces(), withCookies)(
  RightNavBar
);
