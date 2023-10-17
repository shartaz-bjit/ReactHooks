import axios from "axios";

// Custom axios instance
const instance = axios.create({
  baseURL: "http://localhost:4400",
});

export default instance;
