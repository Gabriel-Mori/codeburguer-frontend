import styled from 'styled-components'


export const Container = styled.div`
height: 100vh;
width: 100vw;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
position: relative;

`
export const RegisterImg = styled.img`
display: flex;
height: 100vh;
border-top-right-radius: 100px;
border-bottom-right-radius: 100px;
position:absolute;
margin-right: 1000px;
`


export const ContainerItens = styled.div`
background: #FFFFFF;
border-radius: 0 10px 10px 0;
height: 100vh;
width: 100vw;
padding: 25px 75px;
display: flex;
flex-direction: column;
margin-left: 1000px;


form {
display: flex;
flex-direction: column;

}

h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #787878;
  text-align: center;
  margin-top: 40px
  /* margin-left: 10px; */

}

`

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  color: #787878;
  margin-top: 28px;
  margin-bottom: 8px;


`

export const Input = styled.input`
border: none;
width: 100%;
padding-left: 10px;
font-size: 16px;
`

export const InputContainer = styled.div`
display:flex;
align-items: center;
width: 392px;
height: 40px;
border: ${props => (props.error ? '1px solid #CC1717' : '1px solid #9CA3AF')};
border-radius: 10px;
margin-bottom: 5px;
padding-left: 10px;
font-size: 16px;
width: 100%;
`

export const SignInLink = styled.a`
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 16px;
color: #787878;
margin: 0 auto;
margin-top: 30px;

a {
color: #787878;
text-decoration: underline;
font-weight: 300;
font-weight: bold;
outline: none;
}
`



