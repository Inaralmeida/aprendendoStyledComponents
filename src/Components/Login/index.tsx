import React from 'react'
import { Button, FlexRow, Image, Input, Label, SectionCenter, Title} from '../UI'
import banner from "../../img/banner-home-1.png";
import { FormLogin } from './style';

export const Login: React.FC = () => {
    return (
        <FlexRow>
            <SectionCenter>
                <Title>VETCenter</Title>
                <Image src={banner} />
            </SectionCenter>

            <SectionCenter>
                <FormLogin action="">
                    <fieldset>
                        <Label htmlFor="">Login</Label>
                        <Input type="text"  placeholder='Digite seu username' />
                    </fieldset>
                    <fieldset>
                        <Label htmlFor="" >Senha</Label>
                        <Input type="password" placeholder='Digite sua senha' />
                    </fieldset>
                </FormLogin>
                <Button>Entrar</Button>
            </SectionCenter>
            
        </FlexRow>
    )
}
