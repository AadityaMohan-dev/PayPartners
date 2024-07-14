import React, { createContext, useState } from "react";

export const UserContext = createContext();
function UserContextProvider({ children }) {
  const [isLogedin, setIsLogedin] = useState(false);
  const [isAuthClose, setIsAuthClose] = useState(true);
  const [isExpenseWindowOpen, setIsExpenseWindowOpen] = useState(false);
  const [user,setUser] = useState({});
  console.log(isLogedin);
  return (
    <UserContext.Provider
      value={{
        isLogedin,
        setIsLogedin,
        isAuthClose,
        setIsAuthClose,
        isExpenseWindowOpen,
        setIsExpenseWindowOpen,
        user,setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
