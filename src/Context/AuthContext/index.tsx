import { createContext, useCallback, useContext } from "react";
import { api } from "../../Services/api";

interface IAuth {
  SignIn: ({ login_user_email, login_user_password }: SignInData) => void;
  Token: string | null;
}

type SignInData = { login_user_email: string; login_user_password: string };

const AuthContext = createContext({} as IAuth);

const AuthProvider = ({ children }: any) => {
  const Token = localStorage.getItem("@BloxSystem:token");
  const SignIn = useCallback(
    async ({ login_user_email, login_user_password }: SignInData) => {
      const response = await api.post("/v2/authentication/login", {
        username: login_user_email,
        password: login_user_password,
        institution_id: 22,
      });
      const token = response.data.token;
      console.log("token", token);

      localStorage.setItem("@BloxSystem:token", token);
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
