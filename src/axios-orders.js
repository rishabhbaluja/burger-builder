import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-f677a.firebaseio.com/",
});

export default instance;
