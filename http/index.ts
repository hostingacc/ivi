import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const API_URL = `${baseUrl}:3006`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
