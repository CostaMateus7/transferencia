import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { CardLogin, Container, ParStyled, ParValidate } from "./style";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { Transfer } from "../../Services";




export default function Transferencia(){
  const [ validateForm, setValidateForm ] = useState('')
  const [ user, setUser] = useState({
    userNameCredited: '',
    money: '',
    password: ''
  })
  const validate = async ()=>{
    const schema = yup.object().shape({
      password: yup.string('Digite sua senha')
        .min(6, 'Digite uma senha com no mínimo 6 caracteres')
        .required('Digite sua senha'),
      money: yup.string('Favor preencher com um valor válido')
        .required('Favor preencher com um valor válido'),
      userNameCredited: yup.string('Favor inserir um nome válido')
        .min(3, 'Favor inserir um nome válido')
        .required('Favor inserir um nome'),
    })
    try{
      await schema.validate(user)
      return true
    }
    catch(err){
      setValidateForm(err.errors)
      return false
    }
   }
   const handleClick = async (e)=>{
    e.preventDefault()
    setValidateForm('')
    if(!(await validate(user))) return
    const userNameDebited = localStorage.getItem('userName')
    try{
    const data = await Transfer(userNameDebited, user.userNameCredited, user.money, user.password)
    localStorage.setItem('balance', data.data)
    setUser({
      userNameCredited: '',
      money: '',
      password: ''
    })

    return setValidateForm('Transação realizada com sucesso!')
    }
    catch(errors){
      return setValidateForm(errors.response.data)
    } 
  }
  return(
    <Container>
      
      
      <CardLogin>
      
      <h1>Área de Transferência</h1>
      <form action="post">
      <ParValidate>{validateForm}</ParValidate>
      <label>
        Nome do beneficiário
        <Input
          type={'text'}
          name={'userNameCredited'}
          value={user.userNameCredited}
          onChange={(e)=> setUser({ userNameCredited: e.target.value, money:user.money, password: user.password})}
        />
      </label>
        <label>
        Valor
        <Input
          type={'number'}
          name={'number'}
          value={user.money}
          onChange={(e)=> setUser({userNameCredited: user.userNameCredited, money: e.target.value, password: user.password})}
          />
      </label>
      <label>
       Digite sua senha
        <Input
          type={'password'}
          name={'password'}
          value={user.password}
          onChange={(e)=> setUser({ userNameCredited: user.userNameCredited, money: user.money, password: e.target.value})}
        />
      </label>
      <Button
      type={'submit'}
      onClick={handleClick}
      >
        Transferir
      </Button>
      </form>
      <ParStyled>Faça sua transferência para usuários da plataforma</ParStyled>
      <ParStyled><Link to="/usuario">Voltar para área do usuário</Link></ParStyled>
      
      </CardLogin>
      

    </Container>
  )
}