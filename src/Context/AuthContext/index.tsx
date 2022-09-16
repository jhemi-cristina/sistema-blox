import { createContext, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/api";

interface IAuth {
  SignIn: ({ login_user_email, login_user_password }: SignInData) => void;
  Token: string | null;
}

type SignInData = { login_user_email: string; login_user_password: string };

const AuthContext = createContext({} as IAuth);

const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const Token = localStorage.getItem("@BloxSystem:token");

  const SignIn = useCallback(
    async ({ login_user_email, login_user_password }: SignInData) => {
      const response = await api.post("/v2/authentication/login", {
        username: login_user_email,
        password: login_user_password,
        institution_id: 22,
      });
      const token = response.data.token;

      if (token) {
        localStorage.setItem("@BloxSystem:token", token);
      }

      navigate("/List");
    },
    []
  );

  return (
    <AuthContext.Provider value={{ SignIn, Token }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
