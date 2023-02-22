import styled from 'styled-components'

export const Container = styled.div`

`

export const HomeImg = styled.img`
width: 100%;
`

export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 20px;

`


export const Button = styled.button`
cursor: pointer;
background: none;
border: none;
border-bottom: ${props => (props.isActiveCategory && ' 3px solid #17202E')};
color: ${props => (props.isActiveCategory ? '#17202E' : '#9A9A9D')};
font-size:15px;
line-height: 20px;
outline: none;
`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 10px;
padding: 40px;
justify-items: center;
margin-top: 20px;

`

