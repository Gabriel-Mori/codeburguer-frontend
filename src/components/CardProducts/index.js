import React from "react";
import PropTypes from 'prop-types'
import {Container,Image,ProductName,ProductPrice } from './styles'
import { Button } from '../../components'
import { useCart } from "../../hooks/CartContext";




export const CardProduct = ({product}) => {
const {putProductInCart} = useCart()


return (
  <Container>
  
   <Image src={product.url}/>
   <div>
   <ProductName>{product.name}</ProductName>
   <ProductPrice>{product.formatedPrice}</ProductPrice>
   <Button 
   style={{width: '190px', height: '40px'}} 
   onClick={() => putProductInCart(product)}
   >
    
    Adicionar</Button>
   </div>

  </Container>
)
}



CardProduct.propTypes = {
  product: PropTypes.object
}