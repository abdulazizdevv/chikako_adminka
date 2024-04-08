import axiosInstance from './api';

export const postBanner = async (data: any) => {
  return await axiosInstance.post('/banners', data);
};

export const getAllBanner = async () => {
  return await axiosInstance.get('/banners');
};

export const putBanner = async (id: any, data: any) => {
  return await axiosInstance.put(`/banners/${id}`, data);
};

export const getOneBanner = async (id: any) => {
  return await axiosInstance.get(`/banners/${id}`);
};

export const deleteOneBanner = async (id: any) => {
  return await axiosInstance.delete(`/banners/${id}`);
};
