import React from "react";
import { ShoppingCartSimple, User } from "phosphor-react";


import {
  Container,

} from './styles'



export function Header(){
return (
  <Container>
<ShoppingCartSimple size={32} />
<User size={32} />

  </Container>
)

}

