import React, { useEffect, useState } from "react";
import { ShoppingCartSimple, User } from "phosphor-react";
import { useHistory } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import { useCart } from '../../hooks/CartContext'



import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  PageLinkExit,
  Line

} from './styles'



export function Header() {
  const [finalItems, setFinalItems] = useState(0)
  const { logout, userData } = useUser()
  const { cartProducts } = useCart()
  const {push, location: {pathname} } = useHistory()


const logoutUser = () => {
  logout()
  push('/login')
}





  useEffect(() => {
    const sumItems = cartProducts.reduce((acc, current) => {
     return current.quantity  + acc
    }, 0)
    setFinalItems(sumItems)

  }, [cartProducts])

  return (
    <Container>

      <ContainerLeft>
        <PageLink 
        onClick={() => push('/')}
        isActive={pathname === '/'}
        >
          Home
        </PageLink>

        <PageLink 
        onClick={() => push('/produtos')}
        isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <p className="cart-items">{finalItems}</p>
        <PageLink 
        onClick={() => push('/carrinho')}
        isActive={pathname.includes('carrinho')}
        >
          <ShoppingCartSimple className="cart" size={32} />
        </PageLink>

        <Line></Line>

        <PageLink>
          <User className="user" size={32} />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
        <PageLinkExit onClick={logoutUser}>
          Sair
        </PageLinkExit>
        </ContainerText>

      </ContainerRight>

    </Container>
  )

}

