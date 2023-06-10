import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../assets/Hangout-Places-in-Kampala-City.jpg";
import { Link } from "react-router-dom";

const RestauranCard = (props) => {
  return (
    <Card sx={{ maxWidth: 250, margin: "13px", padding: 0 }} key={props.id}>
      <Link to="/:id">
        <CardMedia
          sx={{ height: 140, width: "100%" }}
          image={props.image}
          title={props.name}
        />
      </Link>
      <CardContent>
        <Link>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {props.title}
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
