import axios from "axios";

const authApiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

authApiClient.interceptors.request.use(
  (config) => {
    const tokens = localStorage.getItem("authTokens");
    if (tokens) {
      const accessToken = JSON.parse(tokens)?.access;
      if (accessToken) {
        config.headers.Authorization = `JWT ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    console.error("Axios interceptor error:", error);
    return Promise.reject(error);
  }
);

export default authApiClient;
