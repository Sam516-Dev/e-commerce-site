import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
} from "react-icons/ai";
import { useOurContext } from "../Context/MyContext";

const TrendingCard = ({ item }) => {
  const { image, category, title, rating, price, id } = item;

  const [favourite, setfavourite] = useState("false");

  const Switch = () => {
    setfavourite(!favourite);
  };


  const { handleAddToCart } = useOurContext();

  return (
    <div
      key={id}
      className=" group w-80 h-96 hover:shadow-2xl hover:border-orange-300 relative flex flex-col border justify-between px-3 py-2 p-1 rounded-md shadow-lg border-blue-200"
    >
      {
      favourite ? (
        <AiOutlineHeart
          onClick={Switch}
          className=" absolute right-5 w-7 cursor-pointer h-7 text-orange-500"
        />
      ) : (
        <AiFillHeart
          onClick={Switch}
          className=" absolute right-5 w-7 cursor-pointer h-7 text-orange-500"
        />
      )}

      <img
        src={image}
        alt=""
        className=" shadow-sm w-full h-48 object-contain"
      />
      <div className="flex flex-col">
        <label className="text-lg font-serif font-light text-blue-500 ">
          {category}
        </label>
        <h3 className=" font-bold text-base text-blue-900">
          {title.slice(0, 30)}...
        </h3>

        <div className="flex justify-between p-1 ">
          <div className="flex items-center gap-2">
            <p> {rating.rate}</p>
            <span className="flex">
              {Array.from({ length: rating.rate }).map((_, index) => (
                <AiFillStar key={index} className="text-orange-500 h-5 w-5" />
              ))}
            </span>
          </div>
          <p> {rating.count} ratings </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex text-blue-950 font-bold text-xl">Ksh.{price}</p>
        <div
          className="flex relative items-center"
          onClick={() => handleAddToCart(item)}
        >
          <AiOutlineShoppingCart className="flex ml-3 cursor-pointer text-orange-500 group-hover:text-black absolute w-7 h-7" />
          <button className="flex pl-12 rounded-md text-orange-500 bg-orange-50 group-hover:bg-orange-500 p-3 group-hover:text-black font-medium ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
