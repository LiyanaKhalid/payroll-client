import axiosInstance from "../configs/axios";

const BASE_URL = "/companies";

const fetchAll = () => axiosInstance.get(BASE_URL);

const companiesApi = { fetchAll };
export default companiesApi;
