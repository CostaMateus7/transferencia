import React, { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Api, LoginApi } from "../Services";

export const AuthContext = createContext()

export default function AuthProvider({children}){
  const navigate = useNavigate()
  const [ status, setStatus] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    const handleLocalStorageToken = localStorage.getItem('userToken')
    const handleLocalStorageUser = localStorage.getItem('userName')
    if(handleLocalStorageUser && handleLocalStorageToken){
     setUser(handleLocalStorageUser)
     Api.defaults.headers.Authorization = `Bearer ${handleLocalStorageToken}`;
    }
    setLoading(false)
    
  },[])


  const login = async (username, password) =>{
  
  try{
  const response = await LoginApi(username, password)
  const data = await response.data
  
  if(!(data.token)){
    return setStatus(data)
  }
  const { token } = data
  localStorage.setItem('userToken', token)
  localStorage.setItem('userAccountId', data.account_id)
  localStorage.setItem('userName', data.username)
  localStorage.setItem('balance', data.balance)
  Api.defaults.headers.Authorization = `Bearer ${token}`;
  setUser(data.username)
  return navigate(`/usuario`)
  }
  catch(error){
    return setStatus(error.response.data)
  }
}

const logout = ()=>{
  localStorage.removeItem('userToken')
  localStorage.removeItem('userName')
  localStorage.removeItem('userAccountId')
  localStorage.removeItem('balance')
  Api.defaults.headers.Authorization = `Bearer ${null}`;
  setUser(null)
  navigate('/login')
}
  return(
    <AuthContext.Provider value={{
      authenticated:!!user, login, logout, user, loading, status, setStatus 
      }}>
      {children}
    </AuthContext.Provider>
  )
}