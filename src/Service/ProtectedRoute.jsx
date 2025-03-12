import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <p
        className="text-center items-center text-blue-700
      justify-center "
      >
        Loading...
      </p>
    );

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
