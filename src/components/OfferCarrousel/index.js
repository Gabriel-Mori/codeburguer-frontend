import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { useHistory } from 'react-router-dom'

import api from '../../service/api'
import Offer from '../../assets/offer.jpeg'
import Carousel from 'react-elastic-carousel'
import formatCurrency from "../../utils/formatCurrency";

import {
  Container,
  CategoryImg,
  ContainerItems,
  ImageOffer,
  Button

} from './styles'



export function OffersCarrousel() {
  const {push} = useHistory()
  const {putProductInCart} = useCart()
  const [offer, setOffer] = useState([])

  useEffect(() => {

    const loadOffer = async () => {
      const { data } = await api.get('/products')

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return {
            ...product,
            formatedPrice: formatCurrency(product.price)
          }
        })


      setOffer(onlyOffers)
    }

    loadOffer()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ]

  return (
    <Container>
      <CategoryImg src={Offer} alt="logo da categoria" />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}

      >
        {
          offer && offer.map((item) => (
            <ContainerItems key={item.id}>
              <ImageOffer src={item.url} alt="imagem da oferta" />

              <p>{item.name}</p>
              <p>{item.formatedPrice}</p>

              <Button
              onClick={() => {
                 putProductInCart(item)
                 push('/carrinho')
              }}
              
              >
                Peça agora</Button>
            </ContainerItems>
          ))
        }
      </Carousel>

    </Container>
  )

}
