import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';


export const ShopCartContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}; 

    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContext = (props) => {

const [cartItems, setCartItems] = useState(getDefaultCart());

const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
}

const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
}

const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : newAmount}))
}

const getTotatCartAmount = () => {
    let totalAmount = 0;

    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
}

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotatCartAmount}


  return (
    <ShopCartContext.Provider value={contextValue}>
      {props.children}
    </ShopCartContext.Provider>
  )
}

export default ShopContext
