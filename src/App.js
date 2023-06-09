import "./App.css";
import HomePage from "./Components/HomePage";

import NewRestuarnt from "./Components/NewItem/NewRestuarnt";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import RestaurantListing from "./Components/RestaurantListing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/home" exact element={<HomePage />} />
        <Route path="/listing" element={<RestaurantListing />} />
        <Route path="/add-new" element={<NewRestuarnt />} />
      </Route>
    </Routes>
  );
}

export default App;
