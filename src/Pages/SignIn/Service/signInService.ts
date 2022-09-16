import { toast } from "react-toastify";
import { api } from "../../../Services/api";

function signInService(data: any) {
  return api
    .post(`auth`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      toast.error("Usuário ou senha incorretos, tente novamente!");
    });
}

export { signInService };
