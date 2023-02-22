import React, {createContext, useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'


const UserContext = createContext({})

export const UserProvider = ({children}) => {
const [userData, setUserData] = useState({})

const putUserData = async (userInfo) => {
  setUserData(userInfo)

 await localStorage.setItem('codeburguer:userData', JSON.stringify(userInfo))
}


useEffect(() => {
const loadUserData = async () => {
  const customerInfo = await localStorage.getItem('codeburguer:userData')
  
  if(customerInfo){
    setUserData(JSON.parse(customerInfo))
  }
}

loadUserData()
},[])

  return (
    <UserContext.Provider value={{putUserData,userData}}>
      {children}
    </UserContext.Provider>
  )
}

 export const useUser = () => {
  const context = useContext(UserContext)

  if(!context){
    throw new Error('useUser must be used with UserContext')
  }

  return context
}


UserProvider.propTypes = {
  children: PropTypes.node
}