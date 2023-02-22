import React, {useEffect, useState} from "react";

import api from '../../service/api'
import Offer from '../../assets/offer.jpeg'
import Carousel from 'react-elastic-carousel'
import Button from '../../components/Button'
import formatCurrency from "../../utils/formatCurrency";

import {
  Container,
  CategoryImg,
  ContainerItems,
  ImageOffer,

} from './styles'



function OffersCarrousel(){
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
},[])

const breakPoints = [
  {width: 1, itemsToShow:1},
  {width: 400, itemsToShow:2},
  {width: 600, itemsToShow:3},
  {width: 900, itemsToShow:4},
  {width: 1300, itemsToShow:5},
]

return (
  <Container>
    <CategoryImg src={Offer} alt="logo da categoria" />

    <Carousel 
    itemsToShow={4} 
    style={{width: '90%'}} 
    breakPoints={breakPoints}

   >
     {
     offer && offer.map((item) => (
      <ContainerItems key={item.id}>
        <ImageOffer src={item.url} alt="imagem da oferta" />

        <p>{item.name}</p>
        <p>{item.formatedPrice}</p>
  
        <Button style={{width: '300px', marginTop: '10px'}} >{item.name}</Button>
      </ContainerItems>
     ))
     }
   </Carousel>

  </Container>
)

}

export default OffersCarrousel