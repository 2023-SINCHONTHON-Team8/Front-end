import axios from "axios";

export const http = axios.create({
  baseURL: "",
});

http.defaults.withCredentials = true;

const token = localStorage.getItem("access_token") ?? false;

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
console.log(token);
