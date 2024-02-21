import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import myImage from "../Assets/myShoes.png";
import { useOurContext } from "../Context/MyContext";
import "../style/cartblurr.css";

const Cart = () => {
  // const { open } = useOurContext();



  const { cartItems, handleDeleteCartItem, open, handlePlusButton,totalCartPrice, cartItemsInTheCart} =
    useOurContext();

  if (open) {
    return (
      <>
        {open && <div className="modal-overlay"></div>}
        <div className=" w-1/3 h-3/4 overflow-auto fixed ml-6 bg-green-100 z-30 right-10 top-20 p-3 border border-blue-800 rounded-md">
          <div className="flex   justify-between items-center pb-2">
            <div className="flex gap-2 items-center">
              <h1 className=" font-semibold text-xl text-blue-900">
                SHOPPING CART
              </h1>
            </div>
            {/* <RxCross2 className=" w-7 h-7" /> */}
            <MdDeleteOutline className=" w-7 h-7" />
          </div>

          {/* mapping cartitems array */}
          {cartItems.map((item, id) => {
            return (

              <div
                key={item.id}
                className="mt-1 flex justify-between border-t-2  border-blue-800 pt-3 pb-3"
              >


                <div className="w-24 overflow-hidden h-24 flex bg-white border border-blue-200 rounded-lg">
                  <img
                    className=" items-center mx-auto justify-center h-24  "
                    src={item.image}
                    alt="OurShoes"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <h2 className="text-blue-900 font-semibold text-base">
                    {item.category}
                  </h2>

                  <div className="flex gap-5 rounded-full border bg-white hover:bg-orange-100 border-blue-900 justify-center w-36 p-1 items-center">
                    <button
                     
                      className="text-blue-900 font-bold text-2xl"
                    >
                      -
                    </button>
                    <label className="text-blue-900 font-bold text-2xl border-l border-r border-blue-900 px-3">
                     {item.quantity}
                    </label>
                    <button className="text-blue-900 font-bold text-2xl" onClick={() => handlePlusButton(item.id)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <RxCross2
                    onClick={() => handleDeleteCartItem(item)}
                    className=" cursor-pointer text-gray-500 w-7 h-7"
                  />
                  <h2 className="text-blue-900 font-bold text-lg ">
                    {item.price}
                  </h2>
                </div>
              </div>

            );
          })}

          <div className="bg-orange-100 flex justify-between py-4 mt-4 border-t border-blue-800">
            <h2 className="text-blue-900 font-bold text-lg "> SUBTOTAL: </h2>
            <h2 className="text-orange-600 font-bold text-lg ">
              {totalCartPrice}
            </h2>
          </div>

          <button className="text-white font-semibold text-lg bg-orange-500 w-full py-3 mt-5 rounded-md ">
            PROCEED TO CHECK OUT
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Cart;
