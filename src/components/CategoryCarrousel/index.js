import React, {useEffect, useState} from "react";

import api from '../../service/api'
import Category from '../../assets/category.jpeg'
import Carousel from 'react-elastic-carousel'

import {
  Container,
  CategoryImg,
  ContainerItems,
  ImageCarroseul,
  Button
} from './styles'



 export function CategoryCarrousel(){
  const [categories, setCategories] = useState([])

useEffect(() => {

  const loadCategories = async () => {
    const { data } = await api.get('/categories')

    setCategories(data)
  }

  loadCategories()
},[])


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
        <Button 
        style={{width: '300px', marginTop: '10px'}}
        to={{
          pathname: '/produtos',
          state: {categoryId: item.id}
        }}
        
        >
          {item.name}
        </Button>
      </ContainerItems>
     ))
     }
   </Carousel>

  </Container>
)

}

