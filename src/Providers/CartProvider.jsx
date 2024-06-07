import { createContext, useState } from "react";

export const CartContext = createContext()
const CartProvider = ({children}) => {
    const [totalPrice,setTotalPrice] = useState(0);
    return (
        <CartContext.Provider value={{totalPrice,setTotalPrice}}>

        </CartContext.Provider>
    );
};

export default CartProvider;