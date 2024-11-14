import axiosInstance from "../configs/axios";

const BASE_URL = "/auth";

const generateToken = (payload) =>
  axiosInstance.post(`${BASE_URL}/generate`, payload);

const authApi = { generateToken };
export default authApi;
