import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "",
  message: "",
};
const newRestuarantSlice = createSlice({
  name: "newRestaurant",
  initialState,
  reducers: {},
});
export default newRestuarantSlice.reducer;
