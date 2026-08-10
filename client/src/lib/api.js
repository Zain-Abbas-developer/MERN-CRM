import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_VITE_URL,
  
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("crm_token");

  console.log("Request URL:", config.baseURL + config.url);
  console.log("Token:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;