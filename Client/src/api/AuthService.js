import axios from "axios";

const API_BASE_URL = "/api/";

const AuthService = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

AuthService.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default AuthService;
