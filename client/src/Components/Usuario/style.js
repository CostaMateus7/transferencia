import styled from "styled-components";


export const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 5%;
  width: 50%;
  h1{
    font-size: 36px;
    margin-bottom: 20px;
  }
  h2{
    margin-bottom: 10px;
  }
  @media screen and (max-width: 900px) {
      width:100%;
  }

`
export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  width: 100%;
`
export const SaldoTranf = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg{
    width: 30px;
    height: 30px;
  }
  a{
    font-weight: bolder;
    color: #2DA44E;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
  }
`
export const CardTransf = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01px solid #6E7781;
  padding: 5px;
  svg{
    width: 30px;
    height: 30px;
  }
`
export const IdTransf = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 900px) {
      width:85%;
  }
`

export const ParIdTrans = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  font-weight: bolder;
  span{
    color: #6E7781;
  }
`
export const ParInfo = styled.p`
  width: 100%;
  color: #6E7781;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`