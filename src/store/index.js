import { configureStore } from "@reduxjs/toolkit";
import createNewResturantReducer from "./slices/newRestaurantSlice";
import editResturantReducer from "./slices/editResturantSlice";
import fetchAllRestaurantReducer from "./slices/fetchAllRestaurantSlice";
import deleteRestaurantReducer from "./slices/deleteRestaurantSlice";
const store = configureStore({
  reducer: {
    // createNewResturant: createNewResturantReducer,
    // editResturant: editResturantReducer,
    // fetchAllRestaurant: fetchAllRestaurantReducer,
    // deleteRestaurant: deleteRestaurantReducer,
  },
});
export default store;
