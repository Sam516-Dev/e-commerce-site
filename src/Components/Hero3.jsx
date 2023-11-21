import React from "react";
import myImage from "../Assets/myShoes.png";

const Hero3 = () => {
  return (
    <div className=" flex justify-between  bg-gradient-to-r p-8 from-blue-950 rounded-md to-orange-500 mt-10 mb-8 h-72 mx-32 ">
      <div className="flex flex-col justify-between ">
        <div className="">
          <p className=" font-serif font-medium text-white">
            Sales 20% off store !
          </p>
          <h2 className=" text-4xl font-bold text-white">
            
            Smart Open Shoes G2 <br /> Pro 2023, For You !
          </h2>
        </div>

        <button className=" rounded-md outline outline-1 w-48  outline-white p-3 text-white font-medium ">
          Shop Now
        </button>

      </div>

      <img className=" h-56" src={myImage} alt="myShoes" />
    </div>
  );
};

export default Hero3;
