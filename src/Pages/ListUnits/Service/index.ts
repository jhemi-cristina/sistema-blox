import { api } from "../../../Services/api";

export function getUnitsService(currentPage: number) {
  return api
    .get(
      `/v1/public/institutions/22/blox_offerings?page=${currentPage}&per=5`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
