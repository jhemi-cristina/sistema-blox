import { TemplateSignIn } from "../Templates/SignIn";
import { Routes as Router, Route } from "react-router-dom";
import { TemplateSignUp } from "../Templates/SignUp";
import { TemplateListUnits } from "../Templates/ListUnits";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<TemplateSignIn />} />
        <Route path="/register" element={<TemplateSignUp />} />
        <Route path="/List" element={<TemplateListUnits />} />
      </Router>
    </>
  );
};

export { Routes };
