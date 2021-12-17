import React from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";

export function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type = "email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
           </FormContainer>
           <Marginer direction= "vertical" margin={10} />
            <MutedLink href="#">Forgot your Password?</MutedLink>
            <Marginer direction= "vertical" margin="1em" />
            <SubmitButton type="submit">Signin</SubmitButton>
         
    </BoxContainer>
}

