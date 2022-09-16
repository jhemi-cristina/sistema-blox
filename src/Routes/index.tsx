import {
  Routes as Router,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../Context/AuthContext";
import { useEffect } from "react";
import { ListUnits } from "../Pages/ListUnits/index";
import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp/index";

const Routes = () => {
  const { Token } = useAuth();

  return (
    <>
      <Router>
        {Token ? (
          <>
            <Route path="/List" element={<ListUnits />} />
            <Route path="*" element={<Navigate to="/List" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Router>
    </>
  );
};

export { Routes };
