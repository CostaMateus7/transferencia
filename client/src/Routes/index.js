import React, { useContext } from "react";
import Login from "../Components/Login"
import Cadastro from "../Components/Cadastro";
import{
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Transferencia from "../Components/Transferencia";
import Usuario from "../Components/Usuario";
import { AuthContext } from "../Auth";


export default function AppRouter(){
  
  const Private = ({children})=>{
    const { authenticated, loading } = useContext(AuthContext)
    if(loading){
     return <div>Carregando...</div>
    }
    if(authenticated !== true){
      return (<Navigate to={'/login'}/>)
    }
    return (children)
  }
  return(
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        {/* Abaixo rotas privadas */}
        <Route path="/" element={<Private><Usuario/></Private>}/>
        <Route path="/transferencia" element={<Private><Transferencia/></Private>}/>
        <Route path="/usuario" element={<Private><Usuario/></Private>}/>
      </Routes>
  )
}