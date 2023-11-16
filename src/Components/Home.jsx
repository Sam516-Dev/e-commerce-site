import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Trending from "./Trending";
import Hero3 from "./Hero3";

const Home = () => {
  return (
    <div className=" mt-36 px-32 ">
      <Hero />
      <Hero2 />
      <Trending />
      <Hero3 />
    </div>
  );
};

export default Home;
