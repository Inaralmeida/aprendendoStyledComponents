import styled from "styled-components";

export const FormLogin = styled.form`
    width: 50%;
    height: 70%;
    background: ${({theme})=> theme.backgroundSecundary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    box-shadow: 5px 5px 7px ${({theme})=> theme.shadow};

    fieldset{
        width: 90%;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        border: none;
    }
`

