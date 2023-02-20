import React from 'react'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

import { At, Key } from "phosphor-react";
import { useForm } from "react-hook-form";
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  SignInLink,
  InputContainer,
  Input,
  Error
} from './style'
import  LoginImg  from '../../assets/login-image.svg'
import  Logo  from '../../assets/logo-fast.png'
import api from '../../service/api'
import Button from '../../components/Button'


function Login() {
    const schema = Yup.object().shape({
      email: Yup.string().email("Digite um E-mail válido").required('E-mail é obrigatório'),
      password: Yup.string().required('Senha é obrigatória').min(6, 'Senha deve conter no minimo 6 digitos'),
    })

     const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async customerData => {
    console.log(customerData)
    const response = await api.post('/session',{
       email: customerData.email,
       password: customerData.password
    })
    console.log(response)

  };



  return (
    <Container>
      <LoginImage src={LoginImg} alt='login-image'/>
      <ContainerItens>

        <img  src={Logo} alt='logo'/>
        <h1>Entre na sua conta</h1>

           <form noValidate onSubmit={handleSubmit(onSubmit)}>

            <Label>Email</Label>
            <InputContainer>
               <span>{<At size={16} />}</span>
               <Input
                  error={errors.email?.message}
                  type='email'
                  {...register("email")}
                  placeholder="E-mail de acesso"
              />
            </InputContainer>
            <Error>{errors.email?.message}</Error>

           
            <Label>Senha</Label>
            <InputContainer>
               <span>{<Key size={16} />}</span>
               <Input
                  error={errors.password?.message}
                  type='password'
                  {...register("password")}
                  placeholder="Senha de acesso"
              />
            </InputContainer>
            <Error>{errors.password?.message}</Error>
           
           <Button type='submit' style={{marginTop:150, marginLeft: 220}}>Entrar</Button>
           </form>

        <SignInLink>Não possui conta? <a href='#'>Cadastre-se</a></SignInLink>

      </ContainerItens>
    </Container>
  )
}
export default Login
