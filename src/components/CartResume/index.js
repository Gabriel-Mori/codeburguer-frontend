import React, { useEffect, useState } from "react";
import api from '../../service/api'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'


import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container } from './styles'
import { Button } from '../Button'


export const CartResume = () => {
  const history = useHistory()
  const [finalItems, setFinalItems] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { cartProducts, clear } = useCart()

  useEffect(() => {
    const sumItems = cartProducts.reduce((acc, current) => {
      return current.quantity + acc
    }, 0)

console.log(cartProducts)
    setFinalItems(sumItems)

    const sumFinalPrice = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumFinalPrice)

  }, [cartProducts, deliveryTax])


  const onSubmit = async () => {
    const order = cartProducts.map((item) => {
      return { id: item.id, quantity: item.quantity }
    })



    await toast.promise(api.post("/orders", { products: order }),
      {
        pending: 'Realizando o pedido',
        success: 'Pedido realizado com sucesso',
        error: 'Falha ao tentar realizar pedido, tente novamente!'
      })
       

    clear()
    setTimeout(() => {
      history.push('/')

    }, 2000)



  }

  return (
    <div>
      <Container>

        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="price">{finalItems}</p>
          <p className="delivery">Taxa de entrega</p>
          <p className="price-delivery">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>

        </div>
      </Container>

      <Button
        style={{ width: '100%', marginTop: '20px' }}
        onClick={onSubmit}
      >
        Finalizar Pedido</Button>
    </div>

  )

}



