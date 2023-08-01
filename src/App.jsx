import React from "react";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/Login";
import UsersPage from "./components/Users";

const App = () => {
  const [currentPage, setCurrentPage] = React.useState("register");

  const handleRegisterSuccess = () => {
    setCurrentPage("email-confirmation");
  };

  return (
    <AuthProvider>
      <div className="container mx-auto p-4">
        {currentPage === "register" ? (
          <LoginPage onSuccess={handleRegisterSuccess} />
        ) : (
          <UsersPage />
        )}
      </div>
    </AuthProvider>
  );
};

export default App;
