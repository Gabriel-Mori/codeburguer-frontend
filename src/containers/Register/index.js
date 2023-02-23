import React from 'react'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'


import { At, Key, User } from "phosphor-react";
import { useForm } from "react-hook-form";
import {
  Container,
  RegisterImg,
  ContainerItens,
  Label,
  SignInLink,
  InputContainer,
  Input,
  Error
} from './style'

import RegisterImage from '../../assets/register-image.svg'
import Logo from '../../assets/logo-fast.png'
import api from '../../service/api'
import { Button } from '../../components'


export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string("Nome é obrigatório").required("Digite um nome"),
    email: Yup.string().email("Digite um E-mail válido").required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatória').min(6, 'Senha deve conter no minimo 6 digitos'),
    confirmPassword: Yup.string().required('Confirme sua senha').oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async customerData => {
    try {
      const { status } = await api.post('/users', {
        name: customerData.name,
        email: customerData.email,
        password: customerData.password
      },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error("E-mail já cadastrado! Faça login para continuar")
      } else {
        throw new Error('')
      }

    } catch (err) {
      toast.error("Falha ao cadastrar! Tente novamente")
    }

  };



  return (
    <Container>
      <RegisterImg src={RegisterImage} alt='register-image' />
      <ContainerItens>

        <img src={Logo} alt='logo' />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label>Nome</Label>
          <InputContainer>
            <span>{<User size={18} />}</span>
            <Input
              error={errors.name?.message}
              type='text'
              {...register("name")}
              placeholder="Digite seu nome"
            />
          </InputContainer>
          <Error>{errors.name?.message}</Error>


          <Label>E-mail</Label>
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


          <Label>Confirmar senha</Label>
          <InputContainer>
            <span>{<Key size={16} />}</span>
            <Input
              error={errors.confirmPassword?.message}
              type='password'
              {...register("confirmPassword")}
              placeholder="Confirmar senha de acesso"
            />
          </InputContainer>
          <Error>{errors.confirmPassword?.message}</Error>

          <Button type='submit' style={{ marginTop: 30, marginLeft: 220 }}>Cadastrar</Button>
        </form>

        <SignInLink>Já possui conta? <Link to='/login'>Entre na sua conta</Link></SignInLink>

      </ContainerItens>
    </Container>
  )
}
