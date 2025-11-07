import axios from "axios";   // 👈 this import was missing

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change if backend uses another port
});

export default API;
