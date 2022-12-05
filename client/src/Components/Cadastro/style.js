import styled from "styled-components";


export const CardLogin = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 5%;
  width: 50%;
  h1{
    font-size: 36px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 900px) {
      width:85%;
  }

`
export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  width: 100%;
`
export const ParStyled = styled.p`
  text-align: center;
  a{
    text-decoration: none;
    color: #2DA44E;
    font-weight: 600;
  
  }
`
export const ResulCadastro = styled.p`
  color: red;
  font-size: 18px;
`