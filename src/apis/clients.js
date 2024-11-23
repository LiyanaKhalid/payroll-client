import axiosInstance from "../configs/axios";

const BASE_URL = "/clients";

const fetchAll = (companyId) =>
  axiosInstance.get(BASE_URL, { params: { companyId } });

const clientsApi = { fetchAll };
export default clientsApi;
