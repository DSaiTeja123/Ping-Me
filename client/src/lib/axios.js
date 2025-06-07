import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "https://ping-me-h020.onrender.com/api" : "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});