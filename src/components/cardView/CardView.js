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
  }
});

const getIdentifiers = parkingData => {
  let i = 2;
  const identifiers = [];
  while (parkingData[`identifier${i}`]) {
    identifiers.push(parkingData[`identifier${i}`]);
    i++;
  }
  return identifiers;
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
    this.setState({ dialogOpen: false });
  };

  render() {
    const { classes, dialog, userId } = this.props;
    const parkingData = this.props.parkingData || {};
    const identifiers = getIdentifiers(parkingData);
    let fromDate;
    let toDate;
    if (parkingData.status !== 'OPEN' && parkingData.status !== 'AVAILABLE') {
      fromDate =
        parkingData.status === 'ASSIGN'
          ? parkingData.assignment.assignments[0].from_date
          : parkingData.releases[0].from_date;
      toDate =
        parkingData.status === 'ASSIGN'
          ? parkingData.assignment.assignments[0].to_date
          : parkingData.releases[0].to_date;
    } else {
      if (parkingData.status === 'AVAILABLE') {
        fromDate =
          parkingData.releases &&
          parkingData.releases.length > 0 &&
          parkingData.releases[0].from_date;
        toDate =
          parkingData.releases &&
          parkingData.releases.length > 0 &&
          parkingData.releases[0].to_date;
      }
    }

    const self = this;
    return (
      <Card>
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
              data={parkingData}
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
              {`${moment.unix(fromDate).format("Do MMM'YY")} to ${moment
                .unix(toDate)
                .format("Do MMM'YY")}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(CardView);
