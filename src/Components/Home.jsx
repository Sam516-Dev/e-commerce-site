import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className=" mt-36 px-32 ">
      <Hero />
      <Hero2 />
      <Trending />
    </div>
  );
};

export default Home;
