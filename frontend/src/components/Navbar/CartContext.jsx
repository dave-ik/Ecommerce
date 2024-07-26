import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const getCartCount = () => cart.length;

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
