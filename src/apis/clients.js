import axiosInstance from "../configs/axios";

const BASE_URL = "/clients";

const fetchAll = (companyId) =>
  axiosInstance.get(BASE_URL, { params: { companyId } });

const fetchOne = (id) => axiosInstance.get(`${BASE_URL}/${id}`);

const createOne = (payload) => axiosInstance.post(BASE_URL, payload);

const updateOne = (id, payload) =>
  axiosInstance.put(`${BASE_URL}/${id}`, payload);

const clientsApi = { fetchAll, fetchOne, createOne, updateOne };
export default clientsApi;
