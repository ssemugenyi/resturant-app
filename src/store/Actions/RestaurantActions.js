import axios from "axios";
export const CreateNewRestaurant = (
  name,
  title,
  cuisineType,
  location,
  image
) => {
  return async () => {
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
      console.log("Data Response", response);
    } catch (error) {
      console.log("Failed to POST", error);
    }
  };
};

export const fetchAllRestaurants = async () => {
  const response = await axios.get(
    `http://127.0.0.1:3500/api/v1//getAllRestuarants`
  );
  console.log(response.data);
};
