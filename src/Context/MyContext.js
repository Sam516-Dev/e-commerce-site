import React, { createContext, useContext, useState } from "react";

const useMyContext = createContext();

const MyContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, SetcartItems] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  //function to switch between true and false
  const HandleShoppingCartClick = () => {
    setOpen(!open);
  };

  const handleDeleteCartItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    SetcartItems(updatedItems);
  };
  console.log("after removing an element !", cartItems);

  //fuction to add items clicked in an Array
  const handleAddToCart = (item) => {
    SetcartItems(item);
    const newArrayItems = [...cartItems];
    newArrayItems.push(item);
    SetcartItems(newArrayItems);
    setCartNumber(cartNumber + 1);
    console.log("you clicked cart button with this item:", item);
  };
  console.log("this are cartItems !!!!!! ", cartItems);

  return (
    <useMyContext.Provider
      value={{
        HandleShoppingCartClick,
        open,
        setOpen,
        handleAddToCart,
        cartItems,
        cartNumber,
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
