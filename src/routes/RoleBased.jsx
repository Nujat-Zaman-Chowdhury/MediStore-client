import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import { useEffect } from "react";


const RoleBasedRoute = () => {
  const navigate = useNavigate();
  const [role] = useRole();

  useEffect(() => {
    if (role === "User") {
      navigate("/dashboard/user-payment-history", { replace: true });
    }
  }, [role, navigate]);

  return null;
};

export default RoleBasedRoute;