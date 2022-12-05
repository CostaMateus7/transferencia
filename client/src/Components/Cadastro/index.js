import React, { useState } from "react";
import * as yup from 'yup';
import Input from "../Input";
import Button from "../Button";
import { CardLogin, Container, ParStyled, ResulCadastro } from "./style";
import { useNavigate } from "react-router-dom";
import { Register } from "../../Services";

export default function Cadastro(){
  const navigate = useNavigate()
  const [ user, setUser ] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [ data, setData ] = useState('')

  
  const handleClick = async (e)=>{
    e.preventDefault();
    if(user.password !== user.confirmPassword){
      return setData('As senhas estão diferentes!')
    }
    if(!(await validate(user))) return
    try{
      const response = await Register(user.username, user.password)
      setData(response.data)
      return navigate('/login')
    }
    catch(error){
      return setData(error.response.data)
    }
    
  }
   
  const validate = async ()=>{
    const schema = yup.object().shape({
      confirmPassword: yup.string('Favor preencher com senha uma válida')
        .min(6, 'Digite uma senha com no mínimo 6 caracteres')
        .required('Favor preencher com uma senha válida'),
      password: yup.string('Favor preencher com uma válida')
        .min(6, 'Digite uma senha com no mínimo 6 caracteres')
        .required('Favor preencher com uma senha válida'),
      username: yup.string('Favor inserir um nome válido')
        .min(3, 'Favor inserir um nome válido')
        .required('Favor inserir um nome'),
    })
    try{
      await schema.validate(user)
      return true
    }
    catch(err){
      setData(err.errors)
      return false
    }
   }
    
  

  return(
   
    <Container>
      
      
      <CardLogin>
        <h1>Cadastro</h1>
        <form method="post">
        <ResulCadastro>{`${data}`}</ResulCadastro>
        <label>
            Nome de usuário
          <Input
          type={'text'}
          name={'username'}
          value={user.username}
          onChange={(e)=> setUser({username: e.target.value, password:user.password, confirmPassword: user.confirmPassword})}
          />
        </label>

        <label>
            Senha
          <Input
          type={'password'}
          name={'password'}
          value={user.password}
          onChange={(e)=> setUser({username: user.username, password: e.target.value, confirmPassword: user.confirmPassword})}
          />
        </label>

        <label>
          Confirmar Senha
          <Input
          type={'password'}
          name={'confirmPassword'}
          value={user.confirmPassword}
          onChange={(e)=> setUser({username: user.username, password: user.password, confirmPassword: e.target.value})}
          />
        </label>

        <Button
        type={'submit'}
        onClick={handleClick}
        >Cadastrar</Button>
        </form>
        <ParStyled>Cadastre agora e ganhe um bônus de R$1.000,00 para transferir entre os usuários da plataforma</ParStyled>
      </CardLogin>

    </Container>
  )
}