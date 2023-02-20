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
export const LoginImage = styled.img`
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





h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #787878;
  text-align: center;
  margin-top: 80px
  /* margin-left: 10px; */

}

img {
background: #373737;
}

`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  color: #787878;
  margin-top: 28px;
  margin-bottom: 8px;


`




export const Button = styled.button`
width: 333px;
height: 50px;
border: none;
background: #17202A ;
border-radius: 20px;
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
text-align: center;
color: #EEEEEE;
margin-bottom: 25px;
margin: 0 auto;
margin-top: 150px;




&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.6;
}
`

export const SignInLink = styled.a`
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 16px;
color: #787878;
margin: 0 auto;
margin-top: 80px;

a {
color: #787878;
text-decoration: underline;
font-weight: 300;
font-weight: bold;


}

`


