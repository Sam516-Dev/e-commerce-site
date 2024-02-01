import React, { createContext, useContext, useState } from "react";

const useMyContext = createContext();

const MyContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalCartPrice, settotalCartPrice] = useState(0);

  //function to switch between true and false
  const HandleShoppingCartClick = () => {
    setOpen(!open);
  };

  const handleDeleteCartItem = (item) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setcartItems(updatedItems);
    const updatedPrice = totalCartPrice - item.price;
    settotalCartPrice(updatedPrice);
  };

  console.log("checking our NAN", totalCartPrice);

  //adding items to cart fuction
  const handleAddToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
    if (!itemExists) {
      // If item doesn't exist, add it to the cart
      const newArrayItems = [...cartItems, item];
      setcartItems(newArrayItems);
      settotalCartPrice(totalCartPrice + item.price);
      console.log("Item added to cart:", item);
    } else {
      console.log("Item already exists in the cart!");
    }
  };

  console.log("this is totalPrice", totalCartPrice);

  const handleMinusButton = (item) => {
    console.log("handleMinusButton clickt", item);
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
        handleMinusButton,
        totalCartPrice,
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
