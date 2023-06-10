import axios from "axios";
import {
  newRestuarantPending,
  newRestuarantSuccess,
  newResturantFail,
} from "../slices/newRestaurantSlice";
import {
  fetchIsPending,
  fetchFail,
  fetchSuccess,
} from "../slices/fetchAllRestaurantSlice";
export const CreateNewRestaurant = (
  name,
  title,
  cuisineType,
  location,
  image
) => {
  return async (dispatch) => {
    dispatch(newRestuarantPending());
    const data = new FormData();
    data.append("name", name);
    data.append("title", title);
    data.append("cuisineType", cuisineType);
    data.append("location", location);
    data.append("image", image);
    console.log(data);
    try {
      const response = await axios.post(
        "http://127.0.0.1:3500/api/v1/newRestuarant",
        data
      );
      const res = response.json();
      dispatch(newRestuarantSuccess(res));
    } catch (error) {
      dispatch(newResturantFail(error));
    }
  };
};

export const fetchAllRestaurants = () => async (dispatch) => {
  dispatch(fetchIsPending());
  try {
    const response = await axios.get(
      `http://127.0.0.1:3500/api/v1//getAllRestuarants`
    );
    const res = await response;
    dispatch(fetchSuccess(res.data));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};
