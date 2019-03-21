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

function RightNavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div" align="right">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            <IconButton color="inherit">
              <Dashboard />
              <span style={{ fontSize: '0.9rem' }}>Manage Data</span>
            </IconButton>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            <IconButton color="inherit">
              <DirectionsCar />
              <span style={{ fontSize: '0.9rem' }}>Manage Parking</span>
            </IconButton>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="h6">
            <IconButton color="inherit">
              <Widgets />
              <span style={{ fontSize: '0.9rem' }}>Mass Manage</span>
            </IconButton>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="h6">
            <IconButton color="inherit">
              <ExitToApp />
              <span style={{ fontSize: '0.9rem' }}>Sign Out</span>
            </IconButton>
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default RightNavBar;
