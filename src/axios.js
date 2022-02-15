import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-5cbfd.cloudfunctions.net/api",
  //"http://localhost:5001/clone-5cbfd/us-central1/api", // The API (cloud function) url
});

export default instance;
