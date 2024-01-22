import React, { createContext, useContext, useState } from "react";

const useMyContext = createContext();

const MyContext = ({ children }) => {

  const [open, setOpen] = useState(false);

  //function to switch between true and false
  const HandleShoppingCartClick = () => {
    setOpen(!open)
  };

  const handleAddToCart = ()=> {
    console.log("you clicked cart button")

  }

  return (
    <useMyContext.Provider value={{ HandleShoppingCartClick, open, setOpen, handleAddToCart }}>
      {children}
    </useMyContext.Provider>
  );
};

const useOurContext = () => {
  return useContext(useMyContext);
};

export { MyContext, useOurContext };
