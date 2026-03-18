import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
 // localStorage.clear()

  const[userdata,setUserData] = useState(null)

 useEffect(() => {
  setLocalStorage()
  const {employees} = getLocalStorage()
  setUserData(employees)

 },[])
  return (
    <div>
      <AuthContext.Provider value = {[userdata,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
