import React, { useEffect } from "react";
import Section from "../Layout/Section";
import RestauranCard from "./RestaurantCard";
import CategoryCard from "./CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchedRestaurants } from "../store/slices/fetchAllRestaurantSlice";
import { fetchAllRestaurants } from "../store/Actions/RestaurantActions";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state) => state.fetchAllRestaurant.isFetching
  );
  const restaurants = useSelector(
    (state) => state.fetchAllRestaurant.restaurants
  );
  let restaurantArray = restaurants?.data;
  console.log(restaurantArray);
  useEffect(() => {
    dispatch(fetchAllRestaurants());
  }, [dispatch]);
  return (
    <>
      <Section title="Popular Categories">
        {isFetching ? (
          <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
          </>
        ) : (
          restaurantArray?.map((restaurant) => (
            <CategoryCard
              id={restaurant.id}
              cuisineType={restaurant.cuisineType}
            />
          ))
        )}
      </Section>
      <Section title="Popular Restuarants">
        {isFetching ? (
          <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
          </>
        ) : (
          restaurantArray?.map((restaurant) => (
            <RestauranCard
              id={restaurant.id}
              image={`../../${restaurant.image.replace(/\\/g, "/")}`}
              title={restaurant.title}
              name={restaurant.name}
            />
          ))
        )}
      </Section>
    </>
  );
};

export default HomePage;
