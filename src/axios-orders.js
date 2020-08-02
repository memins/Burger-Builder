import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-react-57c56.firebaseio.com",
});

export default instance;
