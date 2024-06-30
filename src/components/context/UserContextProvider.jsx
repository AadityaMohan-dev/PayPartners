import React, { createContext, useState } from 'react'

export const UserContext = createContext();
function UserContextProvider({children}) {
  const [isLogedin, setIsLogedin] = useState(false)
  const [isAuthClose, setIsAuthClose] = useState(false)
  return (
    <UserContext.Provider value={{isLogedin,setIsLogedin,isAuthClose,setIsAuthClose}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider