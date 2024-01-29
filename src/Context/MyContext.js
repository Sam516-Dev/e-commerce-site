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

  //fuction to add items clicked in an Array
  const handleAddToCart = (item) => {
    SetcartItems(item);
    const newArrayItems = [...cartItems];
    newArrayItems.push(item);
    SetcartItems(newArrayItems);
  };

  // const handleAddToCart = (item) => {
  //   SetcartItems(item);
  //   const newArrayItems = [...cartItems, item];
  //   if (cartItems.some((id) => id === item.id)) {
  //     newArrayItems.push(item);
  //     SetcartItems(newArrayItems);
  //   } else {
  //     console.log("item already exists in the cart !");
  //   }
  //   console.log("item id is", item.id);
  //   console.log("cartItems are : ", cartItems);
  // };

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
