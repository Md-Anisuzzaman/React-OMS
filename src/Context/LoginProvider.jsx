import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState({
    logIn: false,
    userDetails: JSON.parse(window.localStorage.getItem("userData")) || " ",
    // userDetails:null
  });
  const [selectedLists, setSelectedLists] = useState({
    datas: JSON.parse(window.localStorage.getItem("selectedItemLists")) || ["Not Ordered Yet"]
  })

  const [creatInfo, SetCreateInfo] = useState()


  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, selectedLists, setSelectedLists, creatInfo, SetCreateInfo }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
export default LoginProvider;


