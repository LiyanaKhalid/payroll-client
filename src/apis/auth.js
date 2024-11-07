import axiosInstance from "../configs/axios";

const BASE_URL = "/sessions";

const createSession = (payload) => axiosInstance.post(BASE_URL, payload);

const getSession = () => axiosInstance.get(BASE_URL);

const authApi = {
  createSession,
  getSession,
};

export default authApi;
