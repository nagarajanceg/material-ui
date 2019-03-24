import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

class CardView extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="images/benz-park-4.jpg"
            title="card-title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Card Title
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default CardView;
