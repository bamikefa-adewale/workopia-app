/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  auth: null,
  setAuth: (auth) => {},
});

export const AuthProvider = ({ children }) => {
  const getAuthStorage = localStorage.getItem("auth");
  const [auth, setAuth] = useState(
    getAuthStorage ? JSON.parse(getAuthStorage) : null
  );

  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
