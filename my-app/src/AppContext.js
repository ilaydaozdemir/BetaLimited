import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    console.log("add to cart");
  };

  const subtractFromCart = () => {
    console.log("subtract from cart");
  };

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
