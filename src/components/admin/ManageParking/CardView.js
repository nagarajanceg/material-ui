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
  },
  overlay: {
    position: 'absolute',
    bottom: '38%',
    right: '8%'
  }
});
const handleEdit = event => {
  console.log('click on fab efit');
};
class CardView extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    const { classes } = this.props;
    const self = this;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="images/benz-park-4.jpg"
            title="card-title"
          />
          {/*To do On click action need to be added. In that action modal pop up will open. Check the mock up once*/}
          <div className={classes.overlay} onClick={self.handleEdit}>
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
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(CardView);
