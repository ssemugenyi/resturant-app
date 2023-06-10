import React, { useEffect } from "react";
import RestauranCard from "./RestaurantCard";
import Section from "../Layout/Section";
import { useSelector, useDispatch } from "react-redux";

import { fetchAllRestaurants } from "../store/Actions/RestaurantActions";
const RestaurantListing = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state) => state.fetchAllRestaurant.isFetching
  );
  const restaurants = useSelector(
    (state) => state.fetchAllRestaurant.restaurants
  );
  let restaurantArray = restaurants?.data;
  useEffect(() => {
    dispatch(fetchAllRestaurants());
  }, [dispatch]);
  return (
    <>
      <Section title="Restuarants">
        {restaurantArray?.map((restaurant) => (
          <RestauranCard
            id={restaurant.id}
            image={restaurant.image}
            title={restaurant.title}
            name={restaurant.name}
          />
        ))}
      </Section>
    </>
  );
};

export default RestaurantListing;
