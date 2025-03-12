
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return <p className="text-center text-blue-700">Loading...</p>;
  }

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
