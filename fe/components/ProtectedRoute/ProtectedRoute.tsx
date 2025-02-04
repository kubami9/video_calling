import { type ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../hooks/useAuth.ts";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = (
  { children }: ProtectedRouteProps,
) => {
  // Add your own authentication on the below line.
  const { user } = useAuth();
  const location = useLocation();

  // if (!user) {
  //   return <Navigate to={"/login"} state={{ from: location }} replace />;
  // }

  return children;
};

export default ProtectedRoute;
