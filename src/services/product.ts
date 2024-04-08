import axiosInstance from './api';

export const postProduct = async (data: any) => {
  return await axiosInstance.post('/products', data);
};

export const getAllProduct = async () => {
  return await axiosInstance.get('/products');
};

export const putProduct = async (id: any, data: any) => {
  return await axiosInstance.put(`/products/${id}`, data);
};

export const getOneProduct = async (id: any) => {
  return await axiosInstance.get(`/products/${id}`);
};

export const deleteOneProduct = async (id: any) => {
  return await axiosInstance.delete(`/products/${id}`);
};
