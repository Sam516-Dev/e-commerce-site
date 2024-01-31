import React, { createContext, useContext, useState } from "react";

const useMyContext = createContext();

const MyContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, SetcartItems] = useState([]);

  //function to switch between true and false
  const HandleShoppingCartClick = () => {
    setOpen(!open);
  };

  const handleDeleteCartItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    SetcartItems(updatedItems);
  };
  console.log("after removing an element !", cartItems);

  //fuction to add items clicked in an Array Cart
  // const handleAddToCart = (item) => {
  //   SetcartItems(item);
  //   const newArrayItems = [...cartItems];
  //   newArrayItems.push(item);
  //   SetcartItems(newArrayItems);
  // };

  const handleAddToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
    if (!itemExists) {
      // If item doesn't exist, add it to the cart
      const newArrayItems = [...cartItems, item];
      SetcartItems(newArrayItems);
      console.log("Item added to cart:", item);
    } else {
      console.log("Item already exists in the cart!");
    }
  };

  return (
    <useMyContext.Provider
      value={{
        HandleShoppingCartClick,
        open,
        setOpen,
        handleAddToCart,
        cartItems,
        handleDeleteCartItem,
      }}
    >
      {children}
    </useMyContext.Provider>
  );
};

const useOurContext = () => {
  return useContext(useMyContext);
};

export { MyContext, useOurContext };
