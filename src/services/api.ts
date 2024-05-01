import axios from 'axios';
// const token = localStorage.getItem("token");
export const baseURL = `https://single.uz/api`;
export const baseURLImg = `https://single.uz/uploads`;

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
