import styled from 'styled-components'

export const Container = styled.div`
height: 70px;
box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
display: flex;
padding: 10px;
align-items: center;
flex-direction: row;
justify-content: space-around;

`


export const ContainerLeft = styled.div`
display: flex;
gap: 30px;
`


export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
color: ${props => props.isActive ? '#17202A' : '#55555A'};
font-weight: ${props => props.isActive ? 'bold' : 'normal'};
font-size: 16px;
line-height: 19px;
`


export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 20px;

.cart-items{
  background: #55555A;
  border-radius: 100%;
  position: absolute;
  height: 25px;
  width: 25px;
  margin-left: 20px;
  color: #FFFF;
  padding-left: 7px;
  padding-top: 3px;
  margin-bottom: 30px;
  opacity: 10;
}

.cart {
  position: relative;
  color: #55555A;
  

}

.user {
  color: #55555A;
   
}

`


export const Line = styled.div`
height: 40px;
border-right: 2px solid  #9A9A9A;


`

export const ContainerText = styled.div`
color: #55555A;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;


`


export const PageLinkExit = styled.a`
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
color:#17202A;
cursor: pointer;

`




