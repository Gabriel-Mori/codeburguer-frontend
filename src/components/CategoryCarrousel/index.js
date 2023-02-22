import React, {useEffect, useState} from "react";

import api from '../../service/api'
import Category from '../../assets/category.jpeg'
// import Offer from '../../assets/OFERTAS.png'
import Carousel from 'react-elastic-carousel'
import Button from '../../components/Button'

import {
  Container,
  CategoryImg,
  ContainerItems,
  ImageCarroseul
} from './styles'



function CategoryCarrousel(){
  const [categories, setCategories] = useState([])

useEffect(() => {

  const loadCategories = async () => {
    const { data } = await api.get('/categories')

    setCategories(data)
  }

  loadCategories()
},[])

// const breakPoints = [
//   {width: 1, itemsToShow:1},
//   {width: 400, itemsToShow:2},
//   {width: 600, itemsToShow:3},
//   {width: 900, itemsToShow:4},
//   {width: 1300, itemsToShow:5},
// ]
//  breakPoints={breakPoints}
return (
  <Container>
    <CategoryImg src={Category} alt="logo da categoria" />

    <Carousel 
    itemsToShow={4} 
    style={{width: '90%'}} 
   >
     {
     categories && categories.map((item) => (
      <ContainerItems key={item.id}>
        <ImageCarroseul src={item.url} alt="imagem da categoria" />
        <Button style={{width: '300px', marginTop: '10px'}} >{item.name}</Button>
      </ContainerItems>
     ))
     }
   </Carousel>

  </Container>
)

}

export default CategoryCarrousel