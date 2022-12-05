import React from "react";
import { ButtonStyled } from "./style";


export default function Button({type, onClick, children}){
  return(
    <ButtonStyled
    type={type}
    onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}