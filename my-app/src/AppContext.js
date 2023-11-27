import React, { createContext, useState, useEffect } from "react";
import * as API from "./api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    createSession();
    initializeProducts();
    getCartItems();
  }, []);

  const addToCart = async (productId) => {
    await API.addToCart(productId);
    await getCartItems();
  };

  const subtractFromCart = async (productId) => {
    await API.subtractFromCart(productId);
    await getCartItems();
  };

  const createSession = async () => {
    const sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      const sessionId = await API.createSession();
      localStorage.setItem("sessionId", sessionId);
    }
  };

  const initializeProducts = async () => {
    try {
      const productsData = await API.listProducts();
      setProducts(productsData);
    } catch (error) {
      console.error(`Initializing products failed: ${error.message}`);
    }
  };

  const getCartItems = async () => {
    try {
      const cartItems = await API.viewCart();
      setCartItems(cartItems);
    } catch (error) {
      console.error(error);
    }
  };

  const searchProduct = async (name) => {
    try {
      const results = await API.searchProduct(name);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        subtractFromCart,
        searchProduct,
        searchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
