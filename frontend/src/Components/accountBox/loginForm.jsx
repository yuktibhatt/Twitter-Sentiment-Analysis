import React from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";

export function LoginForm(props) {
    return (
    <BoxContainer>
        <FormContainer>
            <Input type = "email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
           </FormContainer>
           <Marginer direction= "vertical" margin={10} />
            <MutedLink href="#">Forgot your Password?</MutedLink>
            <Marginer direction= "vertical" margin="1.6em" />
            <SubmitButton type="submit">Signin</SubmitButton>
            <Marginer direction= "vertical" margin="1.6em" />
            <MutedLink href="#">Don't have an account ? <BoldLink href="#">Signup</BoldLink></MutedLink>
    </BoxContainer>
    );
}

