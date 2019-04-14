import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { withStyles } from '@material-ui/core';
import {
  primaryStyles as styles,
} from '../../common/componentUtils';


class ReportTable extends Component {
  state = {};
  handleChange = e => {

  };
  render() {
    const { classes } = this.props;

    return (
      <div>
				<Table className={classes.table} aria-labelledby="tableTitle">
					<TableHead>
						<TableRow>
							<TableCell><TableSortLabel>head</TableSortLabel></TableCell>
            </TableRow>
          </TableHead>
					<TableBody>
						<TableRow>
							<TableCell align="right">value</TableCell>
						</TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(ReportTable);
