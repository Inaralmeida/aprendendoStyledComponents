import React, { useState } from "react";
import Header from "./Components/Header";
import themes from "./Styles/Themes/light";
import { ThemeProvider } from "styled-components";
import { Login } from "./Components/Login";
import { AppContainer } from "./Styles/app";
import { GlobalStyle } from "./Styles/global";


function App() {
  const [theme, setTheme] = useState(themes.ligth)

  const toggleTheme = () =>{
    setTheme(theme.title === 'dark' ? themes.ligth : themes.dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header toggleTheme={toggleTheme} />
        <Login />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
