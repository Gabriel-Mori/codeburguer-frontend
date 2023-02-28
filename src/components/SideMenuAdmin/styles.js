import styled from 'styled-components'
import { Link } from 'react-router-dom'
 
export const Container = styled.div`
background: #F9F9F9;
box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
width: 300px;
overflow: hidden;
    
hr {
  margin: 70px 30px;
  height: 2px;
  color: #e5e5e5;
}

`
export const ItemContainer = styled.div`
height: 50px;
display: flex;
align-items: center;
background: ${props => props.isActive ? '#e5e5e6' : '#F9F9F9'};
border-radius: 5px;
margin: 30px;
padding-left: 10px;
overflow-x: hidden;



.icon {
  margin-right: 15px; 
}

`
export const ListLink = styled(Link)`
color: #17202A;
text-decoration: none;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 19px;

`
