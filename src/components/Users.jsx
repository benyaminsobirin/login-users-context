import React from "react";
import { useAuth } from "../context/AuthContext";

const UsersPage = () => {
  const { token } = useAuth();

  return (
    <div
      style={{
        border: "5px solid black",
        borderRadius: "25px",
        height: "600px",
        width: "300px",
        color: "white",
      }}
    >
      <h2>User Success</h2>
      {token ? <p>Token: {token}</p> : <p>Loading token...</p>}
    </div>
  );
};

export default UsersPage;
