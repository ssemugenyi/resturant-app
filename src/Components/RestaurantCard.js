import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../assets/Hangout-Places-in-Kampala-City.jpg";

const RestauranCard = () => {
  return (
    <Card sx={{ maxWidth: 250, margin: "13px", padding: 0 }}>
      <CardMedia
        sx={{ height: 140, width: "100%" }}
        image={Image}
        title="Restaurant image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dinner resturant
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Delicious meals
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default RestauranCard;
