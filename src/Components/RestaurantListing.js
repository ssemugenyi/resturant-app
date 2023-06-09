import React from "react";
import RestauranCard from "./RestaurantCard";
import Section from "../Layout/Section";
const RestaurantListing = () => {
  return (
    <>
      <Section title="Restuarants">
        <RestauranCard />
        <RestauranCard />
        <RestauranCard />
        <RestauranCard />
        <RestauranCard />
        <RestauranCard />
        <RestauranCard />
        <RestauranCard />
      </Section>
    </>
  );
};

export default RestaurantListing;
