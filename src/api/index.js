import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
  timeout: 5000,
});

const authApi = axios.create({
  baseURL,
  timeout: 5000,
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer" + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { api, authApi };
