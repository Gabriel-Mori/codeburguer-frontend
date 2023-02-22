import styled from 'styled-components'

export const Container = styled.div`
display: flex;
gap: 12px;
padding: 16px;
width: max-content;
height: 202px;
background: #f9f9f9;
border-radius: 30px;

div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
`

export const Image = styled.img`
width: 150px;
border-radius: 10px;

`

export const ProductName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;
color: #17202E;

`

export const ProductPrice = styled.p`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #17202E;
margin-top: 20px;

`