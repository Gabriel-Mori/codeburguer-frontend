import React, {createContext, useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'


const CartContext = createContext({})

export const CartProvider = ({children}) => {
const [cartProducts, setCartProducts] = useState([])

const updateLocalStorage = async (products) => {
  await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(products))
}


const putProductInCart = async (product) => {
  const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

  let newCartProducts = []

  if(cartIndex >= 0){
   newCartProducts = cartProducts

   newCartProducts[cartIndex].quantity = 
   newCartProducts[cartIndex].quantity + 1


    setCartProducts(newCartProducts)
  } else {
    product.quantity = 1
    newCartProducts = [...cartProducts, product]
    setCartProducts(newCartProducts)
  }

  await updateLocalStorage(newCartProducts)

}


const deleteItemProduct = async productId => {
 const newProductItem = cartProducts.filter((item) => item.id !== productId)

  setCartProducts(newProductItem)

  await updateLocalStorage(newProductItem)

}


const increaseProducts = async productId => {
  const newCart = cartProducts.map((item) => {
    return item.id === productId ? {...item, quantity: item.quantity + 1} : item
  })

  setCartProducts(newCart)

  await updateLocalStorage(newCart)

}

const decreaseProducts = async productId => {
const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

   if(cartProducts[cartIndex].quantity > 1){
     const newCart = cartProducts.map((item) => {
       return item.id === productId ? {...item, quantity: item.quantity - 1} : item
     })

     setCartProducts(newCart)
   
     await updateLocalStorage(newCart)
   } 
}


useEffect(() => {
const loadUserData = async () => {
  const customerCartData = await localStorage.getItem('codeburguer:cartInfo')
  
  if(customerCartData){
    setCartProducts(JSON.parse(customerCartData))
  }
}

loadUserData()
},[])

  return (
    <CartContext.Provider value={{putProductInCart, cartProducts, increaseProducts, decreaseProducts, deleteItemProduct  }}>
      {children}
    </CartContext.Provider>
  )
}

 export const useCart = () => {
  const context = useContext(CartContext)

  if(!context){
    throw new Error('useCart must be used with UserContext')
  }

  return context
}


CartProvider.propTypes = {
  children: PropTypes.node
}