import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
`;

export const Icon = styled.img`
  width: 50px;
`

export const Title = styled.h1`
  color: ${(({theme})=> theme.textTitle)};
  font-size: 3rem;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
`

export const FlexRow = styled.div`
  width: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionCenter = styled.section`
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  font-family: monospace;
  font-size: 2vh;
  position: relative;
  top: 15px;
  border: 0;
  border-bottom: 2px solid ${(({theme})=> theme.shadow)};
  border-radius: 15px 0 15px 0;
  background: ${(({theme})=> theme.background)};
  color: ${(({theme})=> theme.text)};
  :focus{
    outline: 0;
  }
  ::placeholder{
    color: ${(({theme})=> theme.text)};
  }

`

export const Label = styled.label`

  font-weight: bold;
  font-size: 2.5vh;

`

export const Button = styled.button`

  width: 25%;
  height: 30px;

  border-radius: 10px;
  border: none;

  background: ${(({theme})=> theme.secundary)};
  color: ${(({theme})=> theme.text)};
  font-size: 2.5vh;
  font-weight: bold;
  font-family: monospace;
  box-shadow: 2px 2px 5px ${({theme})=> theme.shadow};

  :hover{
  background: ${(({theme})=> theme.textTitle)};
  cursor: pointer;

  }

`