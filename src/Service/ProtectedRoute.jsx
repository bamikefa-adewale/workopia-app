// import React from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

// const ProtectedRoute = ({ children }) => {
//   const getAuth = localStorage.getItem(auth);
//   const isAuthenticated = JSON.parse(getAuth);
//   return isAuthenticated ? <outlet /> : <Navigate to="/" replace={true} />;
// };

// export default ProtectedRoute;
