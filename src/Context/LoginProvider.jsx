import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState({
    logIn: false,
    userDetails: JSON.parse(window.localStorage.getItem("userData")) || " ",
    // userDetails:null
  });

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export  const useLogin = () => useContext(LoginContext);
export default LoginProvider;


