import React, { Component } from 'react';
import {
  Paper,
  Popper,
  Grow,
  MenuItem,
  ClickAwayListener,
  MenuList
} from '@material-ui/core';
import AppContext from '../../AppContext';
import get from 'lodash/get';

export class Popover extends Component {
  render() {
    const { menuOptions, anchor, id, isOpen } = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <Popper
              open={isOpen}
              anchorEl={anchor}
              transition
              disablePortal
              style={{ zIndex: '1' }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom'
                  }}
                >
                  <Paper>
                    <ClickAwayListener
                      onClickAway={e => this.props.onClose(id)}
                    >
                      <MenuList>
                        {menuOptions.map(option => (
                          <MenuItem
                            onClick={e =>
                              this.props.onSelect(context, option.id)}
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
