import React, { createContext, useState, useEffect } from "react";
import * as API from "./api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const initializeProducts = async () => {
      try {
        const productsData = await API.listProducts();
        setProducts(productsData);
      } catch (error) {
        console.error(`Initializing products failed: ${error.message}`);
      }
    };

    initializeProducts();
  }, []);

  const addToCart = () => {
    console.log("add to cart");
  };

  const subtractFromCart = () => {
    console.log("subtract from cart");
  };

  return (
    <AppContext.Provider
      value={{ products, cartItems, addToCart, subtractFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
