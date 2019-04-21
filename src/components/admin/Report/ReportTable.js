import React, { Component } from 'react';
import TypoGraphy from '@material-ui/core/Typography';
import { withStyles,
	Fab,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel,
	Icon,
} from '@material-ui/core';
import {
  primaryStyles,
} from '../../common/componentUtils';
import compose from 'recompose/compose';
import { withNamespaces } from 'react-i18next';
import { getIdentifiers } from '../../cardView/CardView';
import moment from 'moment/moment';
import { Edit } from '@material-ui/icons';
import UserDialog from '../../dialogs/UserDialog'

const styles = () => ({
	...primaryStyles,
	tableCell: {
		padding: '4px 10px 4px 24px !important'
	}
});

const getLabel = label => {
	return <TypoGraphy variant="subtitle2" align="left">{label}</TypoGraphy>;
}

const getSlotInfo = parkingData => {
	const slotName = getIdentifiers(parkingData, 1);
	return slotName.join('-');
};

const headers = [
	'full_name',
	'email',
	'parking_lot',
	'from_date',
	'to_date',
	'assigned_to',
	'release_to',
	'action',
];

const getFilteredItems = (data, state, props) => {
	const { type, ...rest } = props;
	const { sortBy, sortOn } = state;
	if (!data) {
		return [];
	}
	return data;
};

class ReportTable extends Component {
	state = {
		pageIndex: 0,
		rowsPerPage: 5,
		parkingData: '',
		userId: '',
		parkingId: '',
		dialogOpen: false,
	};
	constructor(props) {
		super(props);
	}
  handleChange = e => {

  };
	handleClose = () => {
		this.setState({ dialogOpen: false });
	};
	handleEdit = id => {
		const item = this.props.data.filter(item => item.parking_id === id)[0];
		this.setState({ dialogOpen: true, parkingId: id, parkingData: item, userId: id });
	};
	handleChangePage = (event, pageIndex) => {
		this.setState({ pageIndex });
	};
	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};
  render() {
		const self = this;
    const { classes, data, t } = this.props;
		const { rowsPerPage, pageIndex } = this.state;
		const items = getFilteredItems(data, this.state, this.props);
    return (
      <div>
				<UserDialog
					open={this.state.dialogOpen}
					parkingId={this.state.parkingId}
					callback={this.handleClose}
					data={this.state.parkingData}
					userId={this.state.userId}
				/>
				<Table className={classes.table} aria-labelledby="tableTitle">
					<TableHead>
						<TableRow>
							{headers.map(title =>
								<TableCell className={classes.tableCell}>
									<TableSortLabel>{getLabel(t(title))}</TableSortLabel>
								</TableCell>)}
            </TableRow>
          </TableHead>
					<TableBody>
						{items && items.length > 0 ?
							items.slice(pageIndex * rowsPerPage, pageIndex * rowsPerPage + rowsPerPage).map(item => (<TableRow>
								<TableCell className={classes.tableCell}>{item.name}</TableCell>
								<TableCell className={classes.tableCell}>{item.email}</TableCell>
								<TableCell className={classes.tableCell}>{getSlotInfo(item)}</TableCell>
								<TableCell className={classes.tableCell}>{`${moment.unix(item.created_ts).format("Do MMM'YY")}`}</TableCell>
								<TableCell className={classes.tableCell}>{`${moment.unix(item.created_ts).format("Do MMM'YY")}`}</TableCell>
								<TableCell className={classes.tableCell}>{item.assigned_to}</TableCell>
								<TableCell className={classes.tableCell}>{item.released_to}</TableCell>
								<TableCell className={classes.tableCell}><div
									className={classes.overlay}
									onClick={() => self.handleEdit(item.parking_id)}
								>
									<Fab
										color="primary"
										aria-label="Edit"
										component="button"
										size="small"
									><Icon><Edit /></Icon></Fab></div></TableCell>
						</TableRow>)) :
							<TableRow><TableCell>No records available</TableCell></TableRow>
						}
          </TableBody>
        </Table>
				{data && data.length > 0 &&
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={items.length}
					rowsPerPage={rowsPerPage}
					page={pageIndex}
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

export default compose(withStyles(styles), withNamespaces())(ReportTable);
