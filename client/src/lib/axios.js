import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:8000" : "https://ping-me-h020.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});