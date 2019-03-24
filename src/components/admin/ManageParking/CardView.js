import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Typography,
  Badge,
  withStyles,
  Button,
  Fab
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

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
  }
});
class CardView extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="images/benz-park-4.jpg"
            title="card-title"
          />

          <CardContent>
            <Typography variant="small">
              <Badge
                color="primary"
                className={classNames(classes.padding, classes.margin)}
                badgeContent="open"
                component="span"
              />
            </Typography>
            <Typography gutterBottom variant="h6" component="span">
              Gate-1
            </Typography>
            <Typography gutterBottom variant="infoText">
              26th-March to 29th-March
            </Typography>
          </CardContent>
          <CardActions>
            <Fab color="primary" aria-label="Edit" className={classes.fab}>
              <Icon>
                <Edit />
              </Icon>
            </Fab>
          </CardActions>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(CardView);
