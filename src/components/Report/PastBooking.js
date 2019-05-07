import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  primaryStyles, reportHeaders, openFile,
  primaryTheme as theme
} from '../common/componentUtils';
import styled from '@material-ui/styles/styled';
import ReportTable from './ReportTable';
import { API } from '../common/ApiPath';
import { fetchResource, defaultHeaders, fetchPost } from '../common/ApiHelper'
import compose from 'recompose/compose';
import { withNamespaces } from 'react-i18next';
import get from 'lodash/get';

const styles = () => ({
	...primaryStyles
});

const Content = styled('div')({
  padding: theme.spacing.unit * 3,
  margin: 'auto',
  width: '85%'
});
const reportFilterKeys = {};
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

class PastBooking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: get(props, 'userInfo.user_vo.type', ''),
			userId: get(props, 'userInfo.user_vo.user_id', ''),
			parkingId: get(props, 'userInfo.user_vo.parking.parkingId', '')
		};
	}
  handleChange = name => event => {
		var self = this;
  	if (name === 'select_type') {
			this.setState({[name]: event.target.value});
			//fetchPost(`${API.url}/report`, JSON.stringify({ type: event.target.value }), headers, self.setItems);
		} else {
			this.setState({[name]: event.target.value});
		}
  };
	loadItems = () => {
		const self = this;
		const { type, userId, parkingId } = self.state;
		if (userId) {
			let url = `${API.url}/getCurrentBooking/${userId}`;
			if (type === 'owner') {
				url = `${url}/${parkingId}`;
			}
			fetchResource(url, defaultHeaders, self.setItems);
		}
	};
	componentDidMount() {
		this.loadItems();
	}
	setItems = (items) => {
		this.setState({ items: items || [] });
	};
	exportItems = items => {
		const self = this;
		const { type, userId, parkingId } = self.state;
		if (userId && items && items.length > 0) {
			let url = `${API.url}/exportCurrentBooking/${userId}`;
			if (type === 'owner') {
				url = `${url}/${parkingId}`;
			}
			fetchPost(url, JSON.stringify({}), defaultHeaders, openFile);
		}
	};
  render() {
		const { items } = this.state;
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
						<ReportTable data={items} filters={getFiltersFromState(this.state)}
												 headers={reportHeaders.filter(item => !['release_to', 'action'].includes(item))}
												 loadItems={this.loadItems} exportItems={this.exportItems} />
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}

export default compose(withStyles(styles), withNamespaces())(PastBooking);
