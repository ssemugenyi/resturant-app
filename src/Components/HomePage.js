import React from "react";
import Section from "../Layout/Section";
import RestauranCard from "./RestaurantCard";
import CategoryCard from "./CategoryCard";

const HomePage = () => {
  return (
    <>
      <Section title="Popular Categories">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Section>
      <Section title="Popular Restuarants">
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

export default HomePage;
