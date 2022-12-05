import styled from "styled-components";


export const HeaderStyled = styled.header`
  width: 100%;
  height: 75px;
  background-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  button, a{
    cursor: pointer;
    border: none;
    background-color: black;
    padding: 10px;
    font-size: 20px;
    color: #fff;
    font-weight: bolder;
    text-decoration: none;
  }
  @media screen and (max-width: 900px) {
      button, a{
        font-size: 15px;
      }
      button{
        padding-right: 0px;
      }
      
    }
`