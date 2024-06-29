import React, { createContext, useState } from 'react'

export const UserContext = createContext();
function UserContextProvider({children}) {
  const [isLogedin, setIsLogedin] = useState(false)
  return (
    <UserContext.Provider value={{isLogedin,setIsLogedin}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider