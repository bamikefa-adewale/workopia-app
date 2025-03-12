// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext({
//   auth: null,
//   setAuth: (auth) => {},
// });

// export const AuthProvider = ({ children }) => {
//   const getAuthStorage = localStorage.getItem("auth");
//   const [auth, setAuth] = useState(
//     getAuthStorage ? JSON.parse(getAuthStorage) : null
//   );

//   useEffect(() => {
//     if (auth) {
//       localStorage.setItem("auth", JSON.stringify(auth));
//     }
//   }, [auth]);

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../componenets/supabaseClient";

const AuthContext = createContext({
  user: null,
  loading: true,
  setUser: () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session on mount
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    fetchUser();

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
