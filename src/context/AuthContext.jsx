import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const registerUser = async (userData, history) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        userData
      );
      const { token } = response.data;
      setToken(token);
      setError(null);
      history.push("/email-confirmation");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ token, error, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
