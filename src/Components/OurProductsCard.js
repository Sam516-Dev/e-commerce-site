import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillStar,
  AiFillHeart,
} from "react-icons/ai";
import { useOurContext } from "../Context/MyContext";

const OurProductsCard = ({ item }) => {
  const { image, category, title, rating, price, id } = item;

  const [favourite, setfavourite] = useState("false");

  const Switch = () => {
    setfavourite(!favourite);
  };

  const HandleViewMore = () => {
    console.log("Hi there Sam !");
    console.log("item clicked is", item)
  };

  //const { handleAddToCart } = useOurContext();

  return (
    <div
      key={id}
      className=" group w-80 h-96 hover:shadow-2xl hover:border-orange-300 relative flex flex-col border justify-between px-3 py-2 p-1 rounded-md shadow-lg border-blue-200"
    >
      {favourite ? (
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
          {" "}
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

      <button
        onClick={HandleViewMore}
        className=" w-full items-center  rounded-md bg-orange-100 p-3 text-orange-500 group-hover:bg-orange-500 group-hover:text-white font-medium "
      >
        View More
      </button>
    </div>
  );
};

export default OurProductsCard;
