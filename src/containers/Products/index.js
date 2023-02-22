import React, { useEffect, useState } from "react";
import api from '../../service/api'
import homeLogo from '../../assets/homelogo.jpeg'

import {
  HomeImg,
  Container,
  Button,
  CategoriesMenu,
  ProductsContainer
} from './styles'
import { CardProduct } from "../../components";
import formatCurrency from "../../utils/formatCurrency";



export function Product() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)


  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]
      setCategories(newCategories)
    }

    const loadProducts = async () => {
      const { data } = await api.get('/products')

      const newPriceProducts = data.map((product) => {
        return {
          ...product,
          formatedPrice: formatCurrency(product.price)
        }
      })

      setProducts(newPriceProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newProducts = products.filter((product) => product.category_id === activeCategory)

      setFilteredProducts(newProducts)
    }

  }, [activeCategory, products])



  return (
    <Container>
      <HomeImg src={homeLogo} alt="logo da pagina inicial" />
      <CategoriesMenu>
        {categories && categories.map((item) => (
          <Button
            type='button'
            key={item.id}
            isActiveCategory={activeCategory === item.id}
            onClick={() => {
              setActiveCategory(item.id)
            }}
          >
            {item.name}
          </Button>
        ))}
      </CategoriesMenu>

      <ProductsContainer>
        {
          filteredProducts && filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        }
      </ProductsContainer>

    </Container>
  )

}
