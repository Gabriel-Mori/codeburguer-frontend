import React from 'react'
import { At, Key, SpinnerGap } from "phosphor-react";

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,

  Button,
  SignInLink

} from './style'

import  LoginImg  from '../../assets/login-image.svg'
import  Logo  from '../../assets/logo-fast.png'
import Inputs from '../../components/Input';

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt='login-image'/>
      <ContainerItens>

        <img  src={Logo} alt='logo'/>
        <h1>Entre na sua conta</h1>
        

            <Label>Email</Label>
            <Inputs  
            placeholder="E-mail de acesso"
            icon={<At size={16} />}

            />
           
            <Label>Senha</Label>
            <Inputs  
            placeholder="Senha de acesso"
            icon={<Key size={16} />}
            />
        

        <Button>Entrar</Button>
        <SignInLink>Não possui conta? <a href='#'>Cadastre-se</a></SignInLink>

      </ContainerItens>
    </Container>
  )
}
export default Login
