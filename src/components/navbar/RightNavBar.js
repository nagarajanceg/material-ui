import React, { Component } from 'react';
import { List, ListItem, ListItemText, withStyles, Typography, IconButton } from '@material-ui/core';
import {
  Widgets,
  DirectionsCar,
  Dashboard,
  ExitToApp,
} from '@material-ui/icons';
import PropTypes from 'prop-types';

const styles = theme => ({
	menuActive: {
		'background-color': 'rgba(0,0,0,0.1)'
	}
});

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
		this.routeChange(item.id)
	}

	routeChange = path => {
		this.props.history.push(`/${path}`);
	};
	render() {
		const { classes } = this.props;
		let selectedId = this.state.selectedId;
		if (!selectedId) {
			if (this.props.navItems[0].id !== 'signOut') {
				selectedId = this.props.navItems[0].id;
			}
		}
		return (
			<List component="nav">
				<ListItem component="div" align="right">
					{this.props.navItems && this.props.navItems.map(item => (<ListItemText inset>
						<Typography color="inherit" variant={item.variant}>
							<IconButton color="inherit" onClick={() => this.handleMenuClick(item)}
													className={selectedId === item.id ? classes.menuActive : ''}>
								{getIcon(item.icon)}
								<span style={{fontSize: '0.9rem', 'paddingLeft': '10px'}}>{item.title}</span>
							</IconButton>
						</Typography>
					</ListItemText>))}
				</ListItem>
			</List>
		);
	}
}

RightNavBar.propTypes = {
  navItems: PropTypes.array,
};

export default withStyles(styles)(RightNavBar);
