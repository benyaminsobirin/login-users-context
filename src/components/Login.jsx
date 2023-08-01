import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import UsersPage from "./Users";

const LoginPage = () => {
  const { registerUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    await registerUser(userData);
    setIsRegistered(true);
    setToken(useAuth().token); // Access token from context
  };

  if (isRegistered) {
    return <UsersPage />;
  }

  return (
    <div
      style={{
        border: "5px solid black",
        borderRadius: "25px",
        height: "300px",
        width: "300px",
        color: "black",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        <h2 style={{ marginTop: "0px" }}>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "30px",
                marginBottom: "4px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: "30px",
                marginBottom: "4px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: "20px",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
