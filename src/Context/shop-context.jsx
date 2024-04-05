import React, { createContext, useState } from 'react'
import { Products } from '../Product';

export const shopContext = createContext(null);

const defCart = () => {
    let cart = {};
    for (let i = 1; i <= Products.length; i++) {
        cart[i] = 0;
        
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defCart());
    const addToCart =(ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] + 1}))
    }
    const removeFromCart =(ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] - 1}))
    }        
    
    const contextValue = {cartItems, addToCart, removeFromCart}
    console.log(cartItems);
  return (
    <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
  )
}
