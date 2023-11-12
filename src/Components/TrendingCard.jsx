import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const TrendingCard = ({item}) => {
  const { image, category, title, rating, price, id } = item;
  console.log("here is item data", item);

  return (
    <div key={id} className=" w-52 h-96 border-2 border-blue-500">
      <img src={image} alt="" className=" w-48 h-48 object-cover" />
      <label> {category}</label>
      <h3> {title}</h3>
      <p> {rating.rate}</p>
      <p>{price}</p>

      <div>
        <AiOutlineShoppingCart />
        <button> Add To Cart </button>
      </div>
    </div>
  );
};

export default TrendingCard;
