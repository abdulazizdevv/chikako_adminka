import axiosInstance from './api';

export const uploadFile = async (data: any) => {
  const res = await axiosInstance.post('/file', data);
  return res;
};
