import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-76bfb1b1dc39.herokuapp.com",
});

export default instance;
