import { createContext, useEffect, useReducer } from 'react';
import { cartReducer, initialCart } from './reducers/cartReducer';
import { initialShipping, shippingReducer } from './reducers/shippingReducer';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useReducer(cartReducer, initialCart)
    let [shipping, setShipping] = useReducer(shippingReducer , initialShipping)

    useEffect(() => {
        setCart({ type: "INITIAL_CART" })
    }, [])

    return (
        <CartContext.Provider value={{ cart, setCart, shipping, setShipping }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;