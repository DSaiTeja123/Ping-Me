import axios from "axios";

const BASE_URL = "https://ping-me-h020.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});