import React, { createContext, useContext, useState } from "react";

const useMyContext = createContext();

const MyContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalCartPrice, settotalCartPrice] = useState(0);
  const [cartItemsInTheCart, setCartItemsInTheCart] = useState(1);
  // const [updateQuantity, setupdateQuantity] = useState(1)
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

  //adding items to cart fuction
  const handleAddToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
    if (!itemExists) {
      // If item doesn't exist, add it to the cart
      const newItem = { ...item, quantity: 1 };
      const newArrayItems = [...cartItems, newItem];
      setcartItems(newArrayItems);
      settotalCartPrice(totalCartPrice + item.price);
      console.log("Item added to cart:", newItem, item.quantity);
    } else {
      console.log("Item already exists in the cart!");
    }
  };

  // const handlePlusButton = (clickedItemId) => {
  //   const updatedCartItems = cartItems.map((item) => {
  //     if (item.id === clickedItemId) {
  //       // Increment quantity by 1 for the clicked item
  //       return { ...item, quantity: item.quantity + 1 };
  //     }
  //     console.log("this is the added quantity", item.quantity)
  //     return item;
  //   });
  //   return updatedCartItems;
  // };

  const handlePlusButton = (clickedItemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === clickedItemId) {
        // Increment quantity by 1 for the clicked item
        return { ...item, quantity: item.quantity + 1 };
      }
      console.log("this is the added quantity", item.quantity);
      return item;
    });
    setcartItems(updatedCartItems); // Update cart state with the updated items
  };

  // const handlePlusButton = cartItems.map((item)=>{
  //     if(singleItem.id == item.id){
  //       return{...cartItems, quantity:item.quantity+1}
  //     }
  // })

  return (
    <useMyContext.Provider
      value={{
        HandleShoppingCartClick,
        open,
        setOpen,
        handleAddToCart,
        cartItems,
        handleDeleteCartItem,
        handlePlusButton,
        totalCartPrice,
        cartItemsInTheCart,
        setCartItemsInTheCart,
        cartItemsInTheCart,
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
