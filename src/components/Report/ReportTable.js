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
	Grid,
	Button
} from '@material-ui/core';
import {
  primaryStyles, reportHeaders,
} from '../common/componentUtils';
import compose from 'recompose/compose';
import { withNamespaces } from 'react-i18next';
import { getIdentifiers } from '../cardView/CardView';
import moment from 'moment/moment';
import { Edit } from '@material-ui/icons';
import ParkingDialog from '../dialogs/ParkingDialog';
import classNames from 'classnames';
import { fetchPost, defaultHeaders } from '../common/ApiHelper';
import { API } from '../common/ApiPath';
import { saveAs } from 'file-saver';

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

const getFilteredItems = (data, filters, state) => {
	if (!data) {
		return [];
	}
	let filteredItems = [];
	const { sortBy, sortOn } = state;
	if (Object.keys(filters).length > 0) {
		data.forEach(item => {
			let isMatchFound = true;
			Object.keys(filters).forEach(key => {
				if(item[key] && item[key].search(new RegExp(filters[key], "i")) < 0) {
					isMatchFound = false;
				}
			});
			if (isMatchFound) {
				filteredItems.push(item);
			}
		});
	} else {
		filteredItems = data;
	}
	return filteredItems;
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
    const { classes, data, filters, t, exportItems } = this.props;
		const { rowsPerPage, pageIndex } = this.state;
		const items = getFilteredItems(data, filters, this.state);
		const headers = this.props.headers || reportHeaders;
    return (
      <div>
				<Grid container spacing={24} alignItems="flex-end" direction="row">
					<Grid item xs="12" className={classNames(classes.gridFlex, classes.flexEnd)}>
						<Button
							variant="contained"
							disabled={false}
							color="primary"
							size="medium"
							onClick={() => exportItems(items)}
						>
							export to excel
						</Button>
					</Grid>
				</Grid>
				<ParkingDialog
					open={this.state.dialogOpen}
					parkingId={this.state.parkingId}
					parkingData={this.state.parkingData}
					callback={this.handleClose}
					onSuccess={this.props.loadItems}
					status={this.state.parkingData.assigned_to ? 'ASSIGN' : 'RELEASE'}
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
								<TableCell className={classes.tableCell}>{item.user_full_name}</TableCell>
								<TableCell className={classes.tableCell}>{getSlotInfo(item)}</TableCell>
								<TableCell className={classes.tableCell}>{`${moment.unix(item.from_date).format("Do MMM'YY")}`}</TableCell>
								<TableCell className={classes.tableCell}>{`${moment.unix(item.to_date).format("Do MMM'YY")}`}</TableCell>
								{headers.includes('assigned_to') && <TableCell className={classes.tableCell}>{item.assigned_to}</TableCell>}
								{headers.includes('release_to') && <TableCell className={classes.tableCell}>{item.released_to}</TableCell>}
								{headers.includes('action') && <TableCell className={classes.tableCell}><div
									className={classes.overlay}
									onClick={() => self.handleEdit(item.parking_id)}
								>
									<Fab
										color="primary"
										aria-label="Edit"
										component="button"
										size="small"
									><Icon><Edit /></Icon></Fab></div></TableCell>}
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
