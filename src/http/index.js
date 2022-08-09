import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

export const $api = axios.create({
  withCredentials: false,
  baseURL: REACT_APP_BASE_URL
});
