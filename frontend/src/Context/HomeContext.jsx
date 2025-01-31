import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'
import all_products from '../Components/Assets/all_products';
export const HomeContext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index < all_products.length+1; index++){
        cart[index] = 0
    }
    return cart
}
const HomeContextProvider = (props) =>{
    const [ cartItems, setCartItems ] = useState(getDefaultCart())
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue = {all_product, all_products, cartItems, addToCart, removeToCart};

    return(
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider