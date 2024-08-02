import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Box, Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function SingleCard({cart}) {

  const [plantId, setPlantId] = useState(0);
  return (
      <Card sx={{ minWidth: 600, maxWidth: 1500, marginRight: 20 }}>
          <CardMedia
          sx={{ height: 140 }}
          image={cart.image}
          title="green iguana"
          />
        <CardContent>
          <Typography sx={{ fontSize: 14 }}  variant='h1' gutterBottom>
            {cart.name}
          </Typography>
          {/* <Typography variant="h5">
              Health: {plant.health} %
          </Typography> */}
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {cart.price}
          </Typography>
        </CardContent>
      </Card>
  );
}