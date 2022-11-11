import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// TODO: create a component that displays a single bakery item
const BakeryItem = (props) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia 
        component="img"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="h4">{props.name}</Typography>
        <Typography variant="h5">{props.description}</Typography>
        <Typography variant="h6">{props.price}</Typography>
        <Button 
          variant="contained"
          onClick={() => props.onClick(props)}
        >Buy Now</Button>
      </CardContent>
    </Card>
  )
}

export default BakeryItem;