import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Image from "../assets/Hangout-Places-in-Kampala-City.jpg";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        margin: "20px",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <CardMedia
          sx={{
            height: 140,
            width: "100%",
            borderRadius: "100%",
            textAlign: "center",
          }}
          image={Image}
          title="Restaurant image"
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chicken
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default CategoryCard;
