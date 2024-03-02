import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TrendingCard from "./TrendingCard";
import { useOurContext } from "../Context/MyContext";
import OurProductsCard from "./OurProductsCard";

const OurProducts = () => {
  const { data } = useOurContext();

  return (
    <div className="mt-32  mx-32 ">
      
      <div className="flex mb-5 gap-20 mt-7 items-center">
        <h1 className=" text-2xl font-black  text-blue-900 ">
          Products
        </h1>
        <div className="flex gap-10">
        
        <button className=" p-1 bg-blue-200 text-blue-600 rounded-full  px-6"> Women </button>
          <button className=" p-1 bg-blue-200 text-blue-600 rounded-full px-6"> Men </button>
        </div>
      </div>

      <div className="grid  grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <OurProductsCard item={item} />
            </div>
          ))
        ) : (
          <div className="bg-orange-500 py-4 rounded-md p-1 col-span-3 text-white font-bold text-center">
            <svg
              className="animate-spin h-8 w-12 mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v2m0 6V4m0 10v2m-6-6h2m6 0h2m-6 6h2m6 0h2M4 12h2m2 0h10m2 0h2"
              ></path>
            </svg>
            Loading data...
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
