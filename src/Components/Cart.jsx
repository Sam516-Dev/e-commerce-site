import React from "react";
import { RxCross2 } from "react-icons/rx";


const Cart = () => {
  return (
    <div className=" w-1/3 h-1/3 bg-green-100 absolute p-3">
     <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className=" font-semibold text-xl">SHOPPING CART</h1>
          <label className="bg-orange-500 rounded-full px-5  font-semibold text-xl">5</label>
         </div>
         <RxCross2 className=" w-7 h-7" />
      </div>
      <div> </div>
      <div> </div>
    </div>
  );
};

export default Cart;
