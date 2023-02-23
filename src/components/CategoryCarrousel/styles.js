import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Container = styled.div`
background: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow {
background: #17202A;
color: #FFFF
}

.rec.rec-arrow:hover {
  opacity: 0.8;
}

.rec.rec-arrow:disabled {
background: #bebebf;
}

.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px  gray; 
}

`

export const CategoryImg = styled.img`

`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

`


export const ImageCarroseul = styled.img`
width: 300px;
border-radius: 20px;
`

export const Button = styled(Link)`
height: 50px;
border: none;
background: #17202A;
border-radius: 20px;
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
text-align: center;
color: #EEEEEE;
text-decoration: none;
display: flex;
align-items:center;
justify-content: center;

&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.6;
}

`


