import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Trending from "./Trending";
import Hero3 from "./Hero3";
import Footer from "./Footer";
import Cart from "./Cart";

const Home = () => {
  return (
    <div className=" mt-36 relative">
      
      <Cart />
      <Hero />
      <Hero2 />
      <Trending />
      <Hero3 />
      <Footer />
    </div>
  );
};

export default Home;
