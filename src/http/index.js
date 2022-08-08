import axios from "axios";

const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const $api = axios.create({
  withCredentials: false,
  baseURL: API_URL
});
