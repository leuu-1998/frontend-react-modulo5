import axios from "axios";

// baseURL : base URL of the API
// (link of "backend")
// this URL must be created in .env

/* export const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  responseType: "json",
  headers: {
    "Content-Type":"application/json"
  }
}); */
//natural way to call
const baseURL = "http://localhost:5000";

export const apiClient = (url, data, method) =>
  axios({
    method,
    url: baseURL + url,
    data,
  });
