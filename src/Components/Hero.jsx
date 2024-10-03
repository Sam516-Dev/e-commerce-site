import React from "react";
import Hoodies from "../Assets/Hoodies.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between mx-32">
       
        <div className=" ">
          <p className=" text-base   font-medium text-orange-500">
            Starting from $1000
          </p>

          <h1 className="text-4xl font-black text-blue-900 mt-5">
            The best Shopping Platform <br /> for all genders in 2023{" "}
          </h1>

          <p className="text-lg font-serif font-light text-blue-800 mt-10">
            Exclusive offer -10% off this week
          </p>

          <div className="flex gap-16 mt-16">
            <button className="p-3 px-7 bg-orange-500 text-white rounded-md text-lg font-medium">
              Shop Now
            </button>
            <button className="p-3 px-10 text-orange-500 outline-1 outline  rounded-md text-lg font-medium">
              Explore
            </button>
          </div>
        </div>

        <div className="flex ">
          <img className=" w-96 h-96" src={Hoodies} alt="hoodies image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
