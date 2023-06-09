import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";

import {
  FormControl,
  TextField,
  Paper,
  Button,
  Input,
  Select,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import classes from "./NewRestuarant.module.css";
import {
  CreateNewRestaurant,
  fetchAllRestaurants,
} from "../../store/Actions/RestaurantActions";

import { useDispatch } from "react-redux";

const NewRestuarnt = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    title: "",
    cuisineType: "",
    location: "",
    image: "",
  });
  const [age, setAge] = React.useState("");

  const selecthandleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {}, [values]);

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    console.log(value);
    setValues({ ...values, [name]: value });
  };
  const imageHandler = (e) => {
    const selectedImage = e.target.files[0];
    setValues({ ...values, image: selectedImage });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        CreateNewRestaurant(
          values.name,
          values.title,
          values.cuisineType,
          values.location,
          values.image
        )
      );
      console.log(
        values.name,
        values.title,
        values.cuisineType,
        values.location,
        values.image
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Paper className={classes.addForm} elevation={4}>
        <Typography variant="h5">Create New Restaurant</Typography>
        <FormControl margin="dense">
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            type="text"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl margin="dense">
          <TextField
            id="outlined-basic"
            label="Title"
            name="title"
            variant="outlined"
            type="text"
            value={values.title}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl margin="dense">
          <InputLabel id="cuisine-type">Cuisine Type</InputLabel>
          <Select
            id="cuisine-type"
            label="Cuisine Type"
            name="cuisine-type"
            value={age}
            onChange={selecthandleChange}
          >
            <MenuItem value={1}>Pizzza</MenuItem>
            <MenuItem value={2}>Chicken</MenuItem>
            <MenuItem value={3}>Vegetable</MenuItem>
            <MenuItem value={4}>Burger</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="dense">
          <TextField
            id="outlined-basic"
            label="location"
            name="location"
            type="text"
            variant="outlined"
            value={values.location}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl margin="dense">
          <Input
            id="image"
            label="image"
            name="image"
            type="file"
            variant="outlined"
            value=""
            onChange={imageHandler}
            onClick={imageHandler}
          />
        </FormControl>
        <Button variant="contained" type="submit">
          Create Restaurant
        </Button>
      </Paper>
    </Form>
  );
};

export default NewRestuarnt;
