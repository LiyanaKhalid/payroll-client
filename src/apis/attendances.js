import axiosInstance from "../configs/axios";

const BASE_URL = "/attendances";

const fetchAll = (filters) =>
  axiosInstance.get(BASE_URL, { params: { ...filters } });

const createOne = (payload) => axiosInstance.post(BASE_URL, payload);

const updateOne = (id, payload) =>
  axiosInstance.put(`${BASE_URL}/${id}`, payload);

const attendancesApi = { fetchAll, createOne, updateOne };
export default attendancesApi;
