import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {
  Widgets,
  DirectionsCar,
  Dashboard,
  ExitToApp
} from '@material-ui/icons';
import PropTypes from 'prop-types';

const getIcon = iconType => {
  switch(iconType) {
    case 'Widgets':
      return <Widgets />;
		case 'DirectionsCar':
			return <DirectionsCar />;
		case 'Dashboard':
			return <Dashboard />;
		case 'ExitToApp':
			return <ExitToApp />;
    default:
      return null;
  }
};

function RightNavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div" align="right">
        {props.navItems && props.navItems.map(item => (<ListItemText inset>
          <TypoGraphy color="inherit" variant={item.variant}>
            <IconButton color="inherit">
							{getIcon(item.icon)}
              <span style={{ fontSize: '0.9rem' }}>{item.title}</span>
            </IconButton>
          </TypoGraphy>
        </ListItemText>))}
      </ListItem>
    </List>
  );
}

RightNavBar.propTypes = {
  navItems: PropTypes.array,
};

export default RightNavBar;
