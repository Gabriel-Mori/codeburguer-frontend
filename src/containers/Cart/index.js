import React from "react";
import homeLogo from '../../assets/homelogo.jpeg'
import { CartItems, CartResume} from "../../components";

import {
  CartImg,
  Container,
  Wrapper
} from './styles'



export function Cart(){
return (
  <Container>
    <CartImg src={homeLogo} alt="logo cart" />

    <Wrapper>
    <CartItems/>
    <CartResume/>
    </Wrapper>

  </Container>
)

}

