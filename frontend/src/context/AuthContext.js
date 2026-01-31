import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [storeName, setStoreName] = useState(localStorage.getItem("storeName"));

  const login = (token, storeName) => {
    localStorage.setItem("token", token);
    localStorage.setItem("storeName", storeName);
    setToken(token);
    setStoreName(storeName);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setStoreName(null);
  };

  return (
    <AuthContext.Provider value={{ token, storeName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
