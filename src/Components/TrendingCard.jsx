import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillStar,
} from "react-icons/ai";

const TrendingCard = ({ item }) => {
  const { image, category, title, rating, price, id } = item;
  // console.log("here is item data", item);

  return (
    <div
      key={id}
      className=" w-80 h-96 hover:shadow-2xl hover:border-orange-300 relative flex flex-col border justify-between px-3 py-2 p-1 rounded-md shadow-lg border-blue-200"
    >
      <AiOutlineHeart className=" absolute right-5 w-7 h-7 text-orange-500" />
      <img
        src={image}
        alt=""
        className=" shadow-sm w-full h-48 object-contain"
      />

      <div className="flex flex-col">
        <label className="text-lg font-serif font-light text-blue-500 ">
          {category}
        </label>
        <h3 className=" font-bold text-base text-blue-900"> {title.slice(0,30)}...</h3>

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
        <div className="flex relative items-center">
          <AiOutlineShoppingCart className="flex ml-3 cursor-pointer text-white absolute w-7 h-7" />
          <button className="flex pl-12 rounded-md bg-orange-500 p-3 text-white font-medium ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
