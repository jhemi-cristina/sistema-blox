import axios from "axios";

const apiUrl = "https://api-dev.blox.education";

const api = axios.create({
  baseURL: apiUrl,
});

export { api };
