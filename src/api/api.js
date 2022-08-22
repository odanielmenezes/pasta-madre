import axios from "axios";

const api = axios.create({
  baseURL: "https://sendermailsmgastronomia.herokuapp.com/",
});

export default api;