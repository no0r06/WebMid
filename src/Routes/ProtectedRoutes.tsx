import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuth = localStorage.getItem("auth");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}