import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (product) => {
        setCartList([...cartList, product])
    }

    const emptyCart = () => {
        setCartList([])
    }
    return(
        <CartContext.Provider value={{cartList, addItem, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}