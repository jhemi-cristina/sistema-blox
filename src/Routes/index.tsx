import { TemplateSignIn } from "../Templates/SignIn";
import { Routes as Router, Route } from "react-router-dom";
import { TemplateSignUp } from "../Templates/SignUp";
import { TemplateListUnits } from "../Templates/ListUnits";
import { useAuth } from "../Context/AuthContext";

const Routes = () => {
  const { Token } = useAuth();
  return (
    <>
      <Router>
        {Token ? (
          <Route path="/List" element={<TemplateListUnits />} />
        ) : (
          <>
            <Route path="/" element={<TemplateSignIn />} />
            <Route path="/register" element={<TemplateSignUp />} />
          </>
        )}
      </Router>
    </>
  );
};

export { Routes };
