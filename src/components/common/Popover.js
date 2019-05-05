import React, { Component } from 'react';
import { Paper, Popper, Grow, MenuItem, ClickAwayListener, MenuList } from '@material-ui/core';

export class Popover extends Component {

  render() {
    const { menuOptions, anchor, id, isOpen } = this.props;
    return (
			<div>
        <Popper open={isOpen} anchorEl={anchor} transition disablePortal style={{ zIndex: '1' }}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={e => this.props.onClose(id)}>
                  <MenuList>
										{menuOptions.map(option => (
											<MenuItem onClick={e => this.props.onSelect(`${option.replace(' ', '')}`)}>
												{option}
											</MenuItem>
										))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}