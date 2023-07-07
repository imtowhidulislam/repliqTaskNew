"use client"
import React, { createContext, useState } from 'react'
const CartContextProvider = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [user,setUser] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    const [statusBtn, setStatusBtn] = useState("new arrival");
  return (
    <CartContextProvider.Provider value={{ status:[statusBtn,setStatusBtn],product:[newProduct,setNewProduct],user:[user,setUser],cart:[cart, setCart]}}>
        {children}
    </CartContextProvider.Provider>
  )
}

export default CartContextProvider;
