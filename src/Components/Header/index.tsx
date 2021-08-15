import React from 'react'
import { useContext } from 'react';
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
import { HeaderContainer } from './style'
import { Icon } from '../UI';
import logo from '../../img/logo.png'

interface Props{
    toggleTheme(): void
}

const  Header: React.FC<Props> = ({toggleTheme}) => {
    const {terciary, secundary, title} = useContext(ThemeContext)
    return (
       <HeaderContainer>
           <Icon src={logo} alt='logo: pata dentro de um coração'/>
           <Switch 
           onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width= {40}
            handleDiameter={20}
            offColor={secundary}
            onColor={terciary}
           />
       </HeaderContainer>
    )
}

export default Header
