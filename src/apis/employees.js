import axiosInstance from "../configs/axios";

const BASE_URL = "/employees";

const fetchAll = (clientId) =>
  axiosInstance.get(BASE_URL, { params: { clientId } });

const fetchOne = (id) => axiosInstance.get(`${BASE_URL}/${id}`);

const createOne = (payload) => axiosInstance.post(BASE_URL, payload);

const updateOne = (id, payload) =>
  axiosInstance.put(`${BASE_URL}/${id}`, payload);

const employeesApi = { fetchAll, fetchOne, createOne, updateOne };
export default employeesApi;
