import axiosInstance from "../configs/axios";

const BASE_URL = "/clients";

const fetchAll = (companyId) =>
  axiosInstance.get(BASE_URL, { params: { companyId } });

const fetchOne = (id) => axiosInstance.get(`${BASE_URL}/${id}`);

const createOne = (payload) => axiosInstance.post(BASE_URL, payload);

const updateOne = (id, payload) =>
  axiosInstance.put(`${BASE_URL}/${id}`, payload);

const deleteOne = (id) => axiosInstance.delete(`${BASE_URL}/${id}`);

const clientsApi = { fetchAll, fetchOne, createOne, updateOne, deleteOne };
export default clientsApi;
