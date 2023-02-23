import React from "react";
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'
import { ShoppingCart, Trash } from "phosphor-react";


export const CartItems = ({ product }) => {

  const { cartProducts, increaseProducts, decreaseProducts, deleteItemProduct } = useCart()
  console.log(cartProducts)

  return (
    <Container>

      <Header>
        <p></p>
        <p>Items</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p style={{ marginLeft: '20px' }}>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ?
        cartProducts.map((item) => (
          <Body key={item.id}>
            <img src={item.url} />
            <p>{item.name}</p>
            <p>{formatCurrency(item.price)}</p>

            <div className="quantity-container">
              <button onClick={() => decreaseProducts(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => increaseProducts(item.id)}>+</button>
            </div>

            <p>{formatCurrency(item.quantity * item.price)}</p>
            <button onClick={() => deleteItemProduct(item.id)}><Trash size={25} /></button>
          </Body>
        ))
        : (
          <EmptyCart>
            Carrinho vazio <ShoppingCart size={25} style={{ marginLeft: '15px' }} />
          </EmptyCart>
        )


      }

    </Container>
  )

}



