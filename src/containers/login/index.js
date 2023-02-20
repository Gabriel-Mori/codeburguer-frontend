import React from 'react'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink

} from './style'

import  LoginImg  from '../../assets/login-image.svg'
import  Logo  from '../../assets/logo-image.svg'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt='login-image'/>
      <ContainerItens>

        <img  src={Logo} alt='logo'/>
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />


        <Label>Password</Label>
        <Input />

        <Button>SingIN</Button>
        <SignInLink>Não possui conta? <a href='#'>SignUp</a></SignInLink>

      </ContainerItens>
    </Container>
  )
}
export default Login
