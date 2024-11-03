import React, { createContext } from 'react'

export const DataContext = createContext()
const UserContext = ({children}) => {
  const username = "Elon Musk"
  const age='40'
  // console.log(props.children)
  return (
    // <div>{children}</div>
    <DataContext.Provider value={username}>
      {children}
    </DataContext.Provider>
  )
}

export default UserContext