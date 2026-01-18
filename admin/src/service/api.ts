import axios from "axios";
import { HOST } from "@/constant/routesPath";
import type { AxiosInstance } from "axios";


const api: AxiosInstance = axios.create({
  baseURL: `${HOST}/api`,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api;