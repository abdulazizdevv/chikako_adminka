import axios from 'axios';
// const token = localStorage.getItem("token");
export const baseURL = `http://localhost:6690/api`;
export const baseURLImg = `http://localhost:6690/uploads`;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
