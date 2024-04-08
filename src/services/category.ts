import axiosInstance from './api';

export const postCategory = async (data: any) => {
  return await axiosInstance.post('/categories', data);
};

export const getAllCategory = async () => {
  return await axiosInstance.get('/categories');
};

export const putCategory = async (id: any, data: any) => {
  return await axiosInstance.put(`/categories/${id}`, data);
};

export const getOneCategory = async (id: any) => {
  return await axiosInstance.get(`/categories/${id}`);
};

export const deleteOneCategory = async (id: any) => {
  return await axiosInstance.delete(`/categories/${id}`);
};
