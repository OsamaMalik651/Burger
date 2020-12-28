import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-11ae9-default-rtdb.firebaseio.com/",
});

export default instance;
