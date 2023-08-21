import axios from "axios";

const appAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

appAxios.interceptors.request.use((config) => {
  config.timeout = 5000; // Wait for 5 seconds before timing out
  return config;
});

export { appAxios };
