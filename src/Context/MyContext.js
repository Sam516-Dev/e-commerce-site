import React, { createContext, useContext, useState, useEffect } from "react";

const useMyContext = createContext();

const MyContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalCartPrice, settotalCartPrice] = useState(0);
  const [cartItemsInTheCart, setCartItemsInTheCart] = useState(1);
  const [mytotalItems, setmytotalItems] = useState(0);
  // const [updateQuantity, setupdateQuantity] = useState(1)
  //function to switch between true and false
  const HandleShoppingCartClick = () => {
    setOpen(!open);
  };

  const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(false);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    const fetchedData = await response.json();
    setData(fetchedData);
    // setLoading(false);
    console.log("data from useEffect hook ", fetchedData);
  }

  useEffect(() => {
    fetchData();
    console.log("fetching data... ");
  }, []);


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

  const handlePlusButton = (clickedItemId) => {
    let updatedPrice = totalCartPrice; 
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === clickedItemId) {
        // Increment quantity by 1 for the clicked item
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        updatedPrice += item.price; // Add the price of the clicked item to the total
        return updatedItem;
      }
      return item;
    });

    const totalItems = updatedCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    console.log(`Total items in the cart: ${totalItems}`);

    setmytotalItems(totalItems);
    settotalCartPrice(updatedPrice); // Update total cart price
    setcartItems(updatedCartItems); // Update cart state with the updated items
  };



  // const myArray = [1, 2, 3, 4, 5];

  // const sum = myArray.reduce((total, num) => {
  //   return total + num;
  // }, 0);
  
  // console.log(sum); 

  const handleMinusButton = (clickedItemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === clickedItemId) {
        if (item.quantity > 1) {
          // Decrease quantity by 1 for the clicked item
          return { ...item, quantity: item.quantity - 1 };
        } else {
          // const updatedPrice = totalCartPrice - (item.price * item.quantity);
          // settotalCartPrice(updatedPrice);

          // Filter out the clicked item from cartItems
          const updatedItems = cartItems.filter(
            (cartItem) => cartItem.id !== item.id
          );

          const updatedPrice = totalCartPrice - item.price;
          settotalCartPrice(updatedPrice);
          setcartItems(updatedItems);
          return null; // Return null since we're removing this item from the list
        }
      }

      console.log("this is the decreased quantity", item.quantity);
      return item;
    });

    // Filter out null values (removed items) from updatedCartItems
    const filteredCartItems = updatedCartItems.filter((item) => item !== null);
    setcartItems(filteredCartItems); // Update cart state with the updated items
  };

  return (
    <useMyContext.Provider
      value={{
        handleMinusButton,
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
        mytotalItems,
        data
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
