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
import { fetchResource } from '../../common/ApiHelper';
import { reportData } from '../../../mocks/report';

const styles = () => ({
	...primaryStyles
});

const Content = styled('div')({
  padding: theme.spacing.unit * 4,
  margin: 'auto',
  width: '85%'
});
class Report extends Component {
  state = {};
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
	componentDidMount() {
		var self = this;
		fetchResource(`${API.url}/getParkings`, null, self.onSuccess);
	}
	onSuccess = items => {
		this.setState({ items: reportData });
	};
  render() {
    const { classes } = this.props;
		const { items } = this.state;
    const textFieldLabels = [
      'Parking Identifier1',
      'Parking Identifier2',
      'Parking Identifier3',
      'First Name',
      'Last Name',
      'Email'
    ];
    return (
      <React.Fragment>
        <Content>
          <MuiThemeProvider theme={theme}>
						<Content>
							<Grid container spacing={24} alignItems="flex-end" direction="row">
								<Grid item xs="6">
									<TextFieldWithOption
										label="Select Type"
										value={this.state.select_type}
										handler={this.handleChange}
										menuOptions={reportTypes}
									/>
								</Grid>
								<Grid item xs="6">
									<TextFieldWithOption
										label="Select Status"
										value={this.state.select_status}
										handler={this.handleChange}
										menuOptions={statusValues}
									/>
								</Grid>
								{generateGrid(1)}
								{textFieldLabels.map(label => (
									<Grid item xs="4">
										<TextFieldUtil
											label={label}
											val={this.state[label.toLowerCase().replace(/ /g, '_')]}
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
						<ReportTable data={items} />
          </MuiThemeProvider>
        </Content>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Report);
