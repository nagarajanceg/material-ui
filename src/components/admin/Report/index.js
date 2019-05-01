import React, { Component } from 'react';
import { Grid, Button, withStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  generateGrid,
  primaryStyles,
  primaryTheme as theme
} from '../../common/componentUtils';
import styled from '@material-ui/styles/styled';
import { reportTypes, statusValues } from '../../common/config';
import { TextFieldUtil, TextFieldWithOption } from '../../common/TextFieldUtil';
import ReportTable from './ReportTable';
import classNames from 'classnames';
import { API } from '../../common/ApiPath';
import { fetchResource, fetchPost } from '../../common/ApiHelper';
import { reportData } from '../../../mocks/report';
import compose from 'recompose/compose';
import { withNamespaces } from 'react-i18next';

const styles = () => ({
	...primaryStyles
});

const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '85%'
});
const reportTextFilters = [
	'parking_identifier1',
	'parking_identifier2',
	'parking_identifier3',
	'first_name',
	'last_name',
	'email'
];
const reportSelectFilters = [
	'select_type',
	'select_status',
];
const menuOptions = {
	select_type: reportTypes,
	select_status: statusValues
};
const reportFilterKeys = {
	select_type: 'type',
	select_status: 'status',
	parking_identifier1: 'identifier1',
	parking_identifier2: 'identifier2',
	parking_identifier3: 'identifier3',
	first_name: 'first_name',
	last_name: 'last_name',
};
const getFiltersFromState = state => {
	const filters = {};
	if (state) {
		Object.keys(reportFilterKeys).forEach(key => {
			if (state[key]) {
				filters[reportFilterKeys[key]] = state[key];
			}
		});
	}
	return filters;
};

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};
class Report extends Component {
  state = {
		select_status: '',
		select_type: '',
	};
  handleChange = name => event => {
		var self = this;
  	if (name === 'select_type') {
			//fetchPost(`${API.url}/report`, JSON.stringify({ type: event.target.value }), headers, self.setItems);
		} else {
			this.setState({[name]: event.target.value});
		}
  };
	componentDidMount() {
		var self = this;
		fetchPost(`${API.url}/report`, JSON.stringify({}), headers, self.setItems);
	}
	setItems = (items, status) => {
		this.setState({ items: status ? items : [] });
	};
  render() {
    const { classes, t } = this.props;
		const { items } = this.state;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
						<Content>
							<Grid container spacing={24} alignItems="flex-end" direction="row">
								{reportSelectFilters.map(name => (
									<Grid item xs="6">
										<TextFieldWithOption
											id={name}
											label={t(name)}
											value={this.state[name]}
											handler={this.handleChange}
											menuOptions={menuOptions[name]}
										/>
									</Grid>
								))}
								{generateGrid(1)}
								{reportTextFilters.map(label => (
									<Grid item xs="4">
										<TextFieldUtil
											id={label}
											label={t(label)}
											val={this.state[label]}
											handler={this.handleChange}
										/>
									</Grid>
								))}
								{generateGrid(1)}
								<Grid item xs="12" className={classNames(classes.gridFlex, classes.flexEnd)}>
									<Button
										variant="contained"
										disabled={false}
										color="primary"
										size="medium"
										onClick={this.handleChange}
									>
										export to excel
									</Button>
								</Grid>
							</Grid>
						</Content>
						<ReportTable data={items} filters={getFiltersFromState(this.state)} />
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}

export default compose(withStyles(styles), withNamespaces())(Report);
