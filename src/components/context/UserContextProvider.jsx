import React, { createContext, useState } from 'react'

export const UserContext = createContext();
function UserContextProvider({children}) {
  const [isLogedin, setIsLogedin] = useState(false)
  const [isAuthClose, setIsAuthClose] = useState(true)
  const [isExpenseWindowOpen, setIsExpenseWindowOpen] = useState(false)
  return (
    <UserContext.Provider value={{isLogedin,setIsLogedin,isAuthClose,setIsAuthClose,isExpenseWindowOpen, setIsExpenseWindowOpen}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider