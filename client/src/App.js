import GlobalStyle from "./Styles/GlobalStyled";
import AppRouter from "./Routes";
import Header  from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../src/Styles/Themes/index"
import React, { useMemo, useState } from "react";
import{
  BrowserRouter as Router,
} from 'react-router-dom'
import Footer from "./Components/Footer";
import AuthProvider from "./Auth";

function App() {
  const [theme, setTheme ] = useState()

  const currentTheme = useMemo(()=>{
    const localStorageTheme = localStorage.getItem('theme')
    if(localStorageTheme){
      setTheme(localStorageTheme === 'light' ? dark : light)
    }
  
    return theme  || dark

  },[theme])
  function handleToggleTheme(){
    
    setTheme(prevState => prevState === dark ? light : dark)
    localStorage.setItem('theme', theme === dark ? 'dark' : 'light')
  }
  return (
    <ThemeProvider theme={currentTheme}>
        <GlobalStyle/>
          <Router>
            <AuthProvider>
              <Header 
              onToggleTheme = {handleToggleTheme}
              selectedTheme = {theme}
              />
                <AppRouter/>
              <Footer/>
            </AuthProvider>
          </Router>
    </ThemeProvider>
  );
}

export default App;
