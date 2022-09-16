import { api } from "../../../Services/api";

export function getUnitsService() {
  return api
    .get(`/v1/public/institutions/22/blox_offerings?page=1&per=5`, {
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
