import styled from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    height: 50px;
    background: ${(({theme})=> theme.primary)};
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`