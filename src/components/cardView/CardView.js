import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Badge,
  withStyles,
  Fab
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import ParkingDialog from '../dialogs/ParkingDialog';
import UserDialog from '../dialogs/UserDialog';
import moment from 'moment';
import get from 'lodash/get';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit}px`
  },
  tabContainer: {
    width: '100%'
  },
  fab: {
    margin: theme.spacing.unit
  },
  overlay: {
    position: 'absolute',
    bottom: '38%',
    right: '8%'
  },
  card: {
    '&:hover': {
      'box-shadow': '0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
			transition: 'box-shadow .25s, -webkit-box-shadow .25s'
    }
  }
});

export const getIdentifiers = (parkingData, index) => {
  const identifiers = [];
  while (parkingData[`identifier${index}`]) {
    identifiers.push(parkingData[`identifier${index}`]);
		index++;
  }
  return identifiers;
};

export const getParkingDate = (parkingData, dateType) => {
  const time = new Date().getSeconds();
  let parkingDate = new Date().getSeconds();
	if (parkingData.status !== 'OPEN' && parkingData.status !== 'AVAILABLE') {
	  parkingDate =  parkingData.status === 'ASSIGN'
			? get(parkingData, `assignment.assignments[0].${dateType}`, time)
			: get(parkingData, `releases[0].${dateType}`, time);
	} else if (parkingData.status === 'AVAILABLE') {
	  parkingDate = get(parkingData, `releases[0].${dateType}`, time);
	}
	return moment.unix(parkingDate);
};

class CardView extends Component {
  constructor() {
    super();
  }

  state = {
    dialogOpen: false
  };

  handleEdit = id => {
    this.setState({ dialogOpen: true, id });
  };

  handleClose = () => {
		this.props.onSuccess();
    this.setState({ dialogOpen: false });
  };

  render() {
    const { classes, dialog, userId } = this.props;
    const parkingData = this.props.parkingData || {};
    const identifiers = getIdentifiers(parkingData, 2);
    const fromDate = getParkingDate(parkingData, 'from_date');
    const toDate = getParkingDate(parkingData, 'to_date');

    const self = this;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="images/benz-park-4.jpg"
            title="card-title"
          />
          {dialog.assign && (
            <ParkingDialog
              open={this.state.dialogOpen}
              parkingId={parkingData.parkingId}
							parkingData={parkingData}
              callback={this.handleClose}
              status={parkingData.status}
            />
          )}
          {dialog.user && (
            <UserDialog
              open={this.state.dialogOpen}
              parkingId={parkingData.parkingId}
              callback={this.handleClose}
              data={parkingData}
              userId={userId}
            />
          )}
          <div
            className={classes.overlay}
            onClick={() => self.handleEdit(parkingData.parkingId)}
          >
            <Fab
              color="primary"
              aria-label="Edit"
              component="button"
              size="small"
            >
              <Icon>
                <Edit />
              </Icon>
            </Fab>
          </div>
          <CardContent>
            <Typography variant="small">
              <Badge
                color={parkingData.status === 'OPEN' ? 'primary' : 'secondary'}
                className={classNames(classes.padding, classes.margin)}
                badgeContent={parkingData.status}
                component="span"
              />
            </Typography>
            {identifiers.map(name => (
              <Typography gutterBottom variant="h6" component="span">
                {name}
              </Typography>
            ))}
            <Typography gutterBottom variant="infoText">
              {`${fromDate.format("Do MMM'YY")} to ${toDate.format("Do MMM'YY")}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(CardView);
