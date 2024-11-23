import axiosInstance from "../configs/axios";

const BASE_URL = "/companies";

const fetchAll = () => axiosInstance.get(BASE_URL);

const fetchOne = (id) => axiosInstance.get(`${BASE_URL}/${id}`);

const companiesApi = { fetchAll, fetchOne };
export default companiesApi;
