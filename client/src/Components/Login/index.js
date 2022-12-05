import React, { useState, useContext } from "react";
import Input from "../Input";
import Button from "../Button";
import { CardLogin, Container, ParStyled, ResulCadastro } from "./style";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { AuthContext } from "../../Auth";


export default function Login(){
  const { login, status, setStatus } = useContext(AuthContext)
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const handleClick = async (e)=>{
    e.preventDefault()
    if(!(await validate(user))) return

    await login(user.username, user.password)
  }

  const validate = async () => {
    const schema = yup.object().shape({
      password: yup.string('Favor preencher com uma válida!')
        .min(6, 'Digite uma senha com no mínimo 6 caracteres!')
        .required('Favor preencher com uma senha válida!'),
      username: yup.string('Favor preencher um nome válido!')
        .required('Favor preencher com um nome válido!'),
    });
    try {
      await schema.validate(user);
      return true;
    } 
    catch (err) {
      setStatus(err.errors)
      return false
    }
  }

  return(
    <Container>
      
      
      <CardLogin>
      <h1>Login</h1>
      <form method="post">
      <ResulCadastro>{status}</ResulCadastro>
      <label>
        Nome de usuário
      <Input
      type={'text'}
      name={'username'}
      value={user.username}
      onChange={(e)=> {
        setUser({
          username: e.target.value,
          password: user.password
        })
      }}
      />
      </label>
      <label>
        Senha
      <Input
      type={'password'}
      name={'password'}
      value={user.password}
      onChange={(e)=>{
        setUser({
          username: user.username,
          password: e.target.value
        })
      }}
      />
      </label>
      <Button
      type={'submit'}
      onClick={handleClick}
      >
        Login
      </Button>
      </form>
      <ParStyled>Ainda não tem conta na NG Cash? <Link to={'/cadastro'}>Cadastrar</Link></ParStyled>
      <ParStyled>Cadastre agora e ganhe um bônus de R$1.000,00 para transferir entre os usuários da plataforma</ParStyled>
      </CardLogin>

    </Container>
  )
}