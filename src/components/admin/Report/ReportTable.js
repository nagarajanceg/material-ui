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
  primaryStyles,
} from '../../common/componentUtils';

const styles = () => ({
	...primaryStyles
});

class ReportTable extends Component {
	state = {
		items: [],
		page: 0,
		rowsPerPage: 5,
	};
	constructor(props) {
		super(props);
	}
  handleChange = e => {

  };
	handleChangePage = e => {

	};
	handleChangeRowsPerPage = e => {

	};
  render() {
    const { classes, items } = this.props;
		const { rowsPerPage, page } = this.state;
    return (
      <div>
				<Table className={classes.table} aria-labelledby="tableTitle">
					<TableHead>
						<TableRow>
							<TableCell><TableSortLabel>head</TableSortLabel></TableCell>
            </TableRow>
          </TableHead>
					<TableBody>
						{items && items.length > 0 ?
							items.map(item => (<TableRow>
							<TableCell>{item.identifier1}</TableCell>
						</TableRow>)) :
							<TableRow><TableCell>No records available</TableCell></TableRow>
						}
          </TableBody>
        </Table>
				{items && items.length > 0 &&
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={items.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'Previous Page',
					}}
					nextIconButtonProps={{
						'aria-label': 'Next Page',
					}}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage}
					labelRowsPerPage={'Rows per page:'}
				/>}
      </div>
    );
  }
}

export default withStyles(styles)(ReportTable);
