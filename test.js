const axios = require("axios");

async function getThings() {
  try {
    const res = await axios.post(
      "http://127.0.0.1:6000/api/v1/newRestuarant",
      {}
    );
    console.log("here", res.data);
  } catch (error) {
    console.log("error here", error);
  }
}

getThings();
