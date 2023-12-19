import React from "react";
import { RxCross2 } from "react-icons/rx";
import myImage from "../Assets/myShoes.png";

const Cart = () => {
  return (
    <div className=" w-1/3 h-auto mt-6  ml-6 bg-green-100 absolute p-3">
      <div className="flex justify-between items-center pb-5 border-b-2  border-blue-800">
        <div className="flex gap-2 items-center">
          <h1 className=" font-semibold text-xl text-blue-900">
            SHOPPING CART
          </h1>
          <label className="bg-orange-500 rounded-full px-4 text-white font-semibold text-xl">
            15
          </label>
        </div>
        <RxCross2 className=" w-7 h-7" />
      </div>

      <div className="mt-5 flex justify-between">
        <div className="w-24 h-24 flex bg-blue-200">
          <img
            className=" items-center mt-4 justify-center h-12"
            src={myImage}
            alt="myShoes"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h2 className="text-blue-900 font-semibold text-base">
            {" "}
            Gaming HeadPhones
          </h2>

          <div className="flex gap-5 rounded-full border border-blue-900 justify-center w-36 p-1 items-center">
            <button className="text-blue-900 font-bold text-2xl">-</button>
            <label className="text-blue-900 font-bold text-2xl border-l border-r border-blue-900 px-3">
              6
            </label>
            <button className="text-blue-900 font-bold text-2xl">+</button>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <RxCross2 className=" text-gray-500 w-7 h-7" />
          <h2 className="text-blue-900 font-bold text-lg "> Ksh.3,000.00 </h2>
        </div>
      </div>
      {/* second div */}
      <div className="mt-5 flex justify-between border-t border-blue-900 pt-3 ">
        <div className="w-24 h-24 flex bg-blue-200">
          <img
            className=" items-center mt-4 justify-center h-12"
            src={myImage}
            alt="myShoes"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h2 className="text-blue-900 font-semibold text-base">
            {" "}
            Gaming HeadPhones
          </h2>

          <div className="flex gap-5 rounded-full border border-blue-900 justify-center w-36 p-1 items-center">
            <button className="text-blue-900 font-bold text-2xl">-</button>
            <label className="text-blue-900 font-bold text-2xl border-l border-r border-blue-900 px-3">
              6
            </label>
            <button className="text-blue-900 font-bold text-2xl">+</button>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <RxCross2 className=" text-gray-500 w-7 h-7" />
          <h2 className="text-blue-900 font-bold text-lg "> Ksh.3,000.00 </h2>
        </div>
      </div>
      {/* second div */}
      <div className="mt-5 flex justify-between border-t border-blue-900 pt-3 ">
        <div className="w-24 h-24 flex bg-blue-200">
          <img
            className=" items-center mt-4 justify-center h-12"
            src={myImage}
            alt="myShoes"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h2 className="text-blue-900 font-semibold text-base">
            {" "}
            Gaming HeadPhones
          </h2>

          <div className="flex gap-5 rounded-full border border-blue-900 justify-center w-36 p-1 items-center">
            <button className="text-blue-900 font-bold text-2xl">-</button>
            <label className="text-blue-900 font-bold text-2xl border-l border-r border-blue-900 px-3">
              6
            </label>
            <button className="text-blue-900 font-bold text-2xl">+</button>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <RxCross2 className=" text-gray-500 w-7 h-7" />
          <h2 className="text-blue-900 font-bold text-lg "> Ksh.3,000.00 </h2>
        </div>
      </div>

      <div className="bg-orange-100 flex justify-between py-4 mt-4 border-t border-blue-800">
        <h2 className="text-blue-900 font-bold text-lg "> SUBTOTAL: </h2>
        <h2 className="text-orange-600 font-bold text-lg "> Ksh.12,000.00 </h2>
      </div>

      <button className="text-white font-semibold text-lg bg-orange-500 w-full py-3 mt-5 rounded-md ">
       
        PROCEED TO CHECK OUT
      </button>
    </div>
  );
};

export default Cart;
