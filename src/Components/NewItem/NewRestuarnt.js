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
import { CreateNewRestaurant } from "../../store/Actions/RestaurantActions";
import { selectNewIsLoading } from "../../store/slices/newRestaurantSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewRestuarnt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectNewIsLoading);

  const [values, setValues] = useState({
    name: "",
    title: "",
    cuisineType: "",
    location: "",
    image: "",
  });

  const selecthandleChange = (event) => {
    const selectInput = event.target.value;
    setValues({ ...values, cuisineType: selectInput });
  };

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
      setValues({
        name: "",
        title: "",
        cuisineType: "",
        location: "",
        image: "",
      });
      navigate("/listing");
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
            // error={true}
            // helperText="This field is required"
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
            value={values.cuisineType}
            onChange={selecthandleChange}
          >
            <MenuItem value="Pizza">Pizza</MenuItem>
            <MenuItem value="Chicken">Chicken</MenuItem>
            <MenuItem value="Vegetable">Vegetable</MenuItem>
            <MenuItem value="Burger">Burger</MenuItem>
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
          {isLoading ? "Creating restuarant..." : "Create Restaurant"}
        </Button>
      </Paper>
    </Form>
  );
};

export default NewRestuarnt;
