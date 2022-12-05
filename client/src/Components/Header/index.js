import React from "react";
import { Link } from "react-router-dom";
import { dark } from "../../Styles/Themes";
import { HeaderStyled } from "./style";

export default function Header({onToggleTheme, selectedTheme}){
  return(
    <HeaderStyled>
      <h1>
      NG Cash
      </h1>
      <div>
        <Link to={'/login'}>Login</Link>
        <Link to={'/cadastro'}>Cadastro</Link>
      <button 
      onClick={onToggleTheme}
      >
      {selectedTheme === dark ? '🌞' : '🌚'}
      </button>
      </div>
    </HeaderStyled>
  )
}