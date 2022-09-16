import { api } from "../../../Services/api";

export function getUnitsService() {
  return api
    .get(`/v2/authentication/login`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
