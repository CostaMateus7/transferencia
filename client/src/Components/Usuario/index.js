import React, { useEffect, useState, useContext } from "react";
import { Card, Container, SaldoTranf } from "./style";
import { Link } from "react-router-dom";
// import {GiPayMoney} from "react-icons/gi"
import { User } from "../../Services";
import Button from "../Button";
import { AuthContext } from "../../Auth";
import { formatPrice } from "../../Money";

export default function Usuario(){
  const {logout} = useContext(AuthContext)
  const [ name, setName ] = useState('')
  const [ balance, setBalance ] = useState('')
  const [ loading, setLoading ] = useState()
  useEffect(()=>{
    (async ()=>{
      try{
      await User()
      const idName = localStorage.getItem('userName')
      const balanceUser = localStorage.getItem('balance')
      setName(idName)
      setBalance(balanceUser)
      setLoading(false)
      }
      catch(error){
        return console.log(error)
      }
      
    })();

  },[])

  if(loading){
    return(
      <div>...Carregando</div>

    )
  }
  
  return(
    <Container>
      <Card>
        <h1>Olá, {name}!</h1>

          <SaldoTranf>
            <h2>Seu saldo é: {formatPrice(balance)}</h2>
            <Link to={'/transferencia'}>
            Nova Transferência
              {/* <GiPayMoney/> */}
            </Link>
          </SaldoTranf>
          <Button
          type={'submit'}
          onClick={logout}
          >
            Logout
          </Button>

        {/* <h2>Histórico</h2>
          <CardTransf>
            <GiPayMoney/>
            <IdTransf>
              <ParIdTrans>Transferência recebida <span>10/10/2022</span></ParIdTrans>
              <ParInfo>Marcos Aurélio dos Santos Júnior</ParInfo>
              <ParInfo>R$20,00</ParInfo>
            </IdTransf>
          </CardTransf> */}
     
      </Card>

    </Container>
  )
}