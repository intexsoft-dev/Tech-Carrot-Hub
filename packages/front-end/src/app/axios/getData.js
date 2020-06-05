import axios from "axios";
import { config } from "../config";
const http = axios.create({
  baseURL: config.url,
  timeout: config.timeout,
  credentials: true,
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => console.log(error)
);

http.interceptors.request.use((config) => {
  config.headers.authorization = 'Bearer dGVhY2gtY2Fycm90LWh1Yjp0ZXN0';
  return config;
});


export const getData = () => {
  const url = `${config.protocol}://${config.host}/job`;
  return http.get(url);
};
export const deleteData = (id) => {
  const url = `${config.protocol}://${config.host}/job/${id}`;
  return http.delete(url);
};
