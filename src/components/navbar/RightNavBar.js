import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Dashboard from '@material-ui/icons/Dashboard';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
// import SvgIcon from '@material-ui/core/SvgIcon';

function RightNavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div" align="right">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            <IconButton color="inherit">
              <Icon>
                <Dashboard />
              </Icon>
              <span>Manage Data</span>
            </IconButton>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            <IconButton color="inherit">
              <DirectionsCar /> Manage Parking
            </IconButton>
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default RightNavBar;
