import { createContext, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

type SignInData = { username: string; password: string };

type SignUpData = {
  name: string;
  cpf: string;
  date: string;
  email: string;
  password: string;
  password_confirm: string;
};

interface IAuth {
  SignIn: ({ username, password }: SignInData) => void;
  SignUp: ({
    name,
    cpf,
    date,
    email,
    password,
    password_confirm,
  }: SignUpData) => void;
  Token: string | null;
}

const AuthContext = createContext({} as IAuth);

const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const Token = localStorage.getItem("@BloxSystem:token");

  const SignIn = useCallback(
    async ({ username, password }: SignInData) => {
      const response = await api.post("/v2/authentication/login", {
        username: username,
        password: password,
        institution_id: 22,
      });
      const token = response.data.token;

      if (token) {
        localStorage.setItem("@BloxSystem:token", token);
      }

      navigate("/List");
    },
    [navigate]
  );
  const SignUp = useCallback(
    async ({
      name,
      cpf,
      date,
      email,
      password,
      password_confirm,
    }: SignUpData) => {
      await api
        .post("/auth", {
          institution_id: 22,
          name: name,
          email: email,
          username: name,
          password: password,
          password_confirmation: password_confirm,
          cpf: cpf,
          birth_date: date,
          allow_emails: false,
          confirm_success_url: "https://dev.blox.education/public/22/offerings",
        })
        .then((response) => {
          console.log("response", response);
          toast.success("Usuário cadastrado com sucesso!");
          navigate("/");
        })
        .catch((error) => {
          console.log("error", error);

          toast.error("Erro ao realizar cadastro, tente novamente!");
        });
    },
    [navigate]
  );

  return (
    <AuthContext.Provider value={{ SignIn, SignUp, Token }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
