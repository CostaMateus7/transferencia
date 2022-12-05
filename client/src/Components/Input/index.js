import React from "react";
import { InputStyled } from "./style";


export default function Input({type, value, name, onChange}){
  return(
    <InputStyled
    type={type}
    value={value}
    name={name}
    onChange={onChange}
    />
  )
}