import React from 'react';
import { Grid } from '@material-ui/core';
import { pink, teal } from '@material-ui/core/colors/index';
import { createMuiTheme } from '@material-ui/core/styles/index';
import { saveAs } from 'file-saver';

export const generateGrid = count => {
  const elements = [];
  for (var i = 0; i < count; i++) {
    elements.push(<Grid item xs={1} />);
    elements.push(<Grid item xs={11} />);
  }
  return elements;
};

export const primaryStyles = {
  gridFlex: {
    display: 'flex'
  },
  flexEnd: {
    'justify-content': 'flex-end'
  },
  marginLeft: {
    marginLeft: '10rem'
  }
};

export const primaryTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: pink[300]
    }
  }
});

export const reportHeaders = [
	'full_name',
	'parking_lot',
	'from_date',
	'to_date',
	'assigned_to',
	'release_to',
	'action',
];

export const openFile = data => {
	if (data) {
		var blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
		saveAs(blob, 'Report.xlsx');
	}
};
