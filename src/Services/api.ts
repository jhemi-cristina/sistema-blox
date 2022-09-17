import axios from "axios";

const apiUrl = "https://api-dev.blox.education";

export const api = axios.create({
  baseURL: apiUrl,
});
