import styled from 'styled-components'
import Background from '../../assets/background.svg'


export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${Background}');
background: cover;
display: flex;
justify-content: center;
align-items: center;
`
export const LoginImage = styled.img`
height: 70%;
`


export const ContainerItens = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: 70%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 100px

}

`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  margin-top: 100px;


`

export const Input = styled.input``


export const Button = styled.button``

export const SignInLink = styled.a``


