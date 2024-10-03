import React from "react";
import Sam from "../Assets/sam.jpg";
import Peter from "../Assets/peter.png";
import Tony from "../Assets/tony.jpg";

const AboutUs = () => {
  return (
    <div className="mx-10 my-16 mt-32">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        About Us
      </h1>

      <div className="mb-10 bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Story</h2>
        <p className="text-lg text-gray-700">
          Welcome to our company, where we believe in delivering quality and
          innovation. Founded with the vision of providing unique and top-notch
          products to our customers, we have grown into a brand that values
          trust, integrity, and customer satisfaction.
        </p>
      </div>

      <div className="mb-10 bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to deliver exceptional products that bring joy and
          convenience to everyday life, while promoting sustainability and
          customer-focused experiences.
        </p>
      </div>

      <div className="mb-10 bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
        <p className="text-lg text-gray-700">
          Our vision is to become a leading e-commerce platform that connects
          people with the products they love, while continuously pushing the
          boundaries of innovation and creativity.
        </p>
      </div>

      <div className="mb-10 bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-4 items-center bg-gray-100 p-4 rounded-lg shadow">
            <img className=" w-16 h-16 object-cover rounded-full" src={Sam} alt="sam" />

            <div className=" ">
              <h3 className="text-xl font-bold text-blue-800">
                Samuel Njoroge
              </h3>
              <p className="text-md text-gray-600">CEO</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-gray-100 p-4 rounded-lg shadow">
            <img className=" h-16 w-16 object-cover rounded-full" src={Peter} alt="sam" />

            <div className=" ">
              <h3 className="text-xl font-bold text-blue-800">Peter John</h3>
              <p className="text-md text-gray-600">CTO</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-gray-100 p-4 rounded-lg shadow">
            <img className=" w-16 h-16 rounded-full object-cover" src={Tony} alt="sam" />

            <div className=" ">
              <h3 className="text-xl font-bold text-blue-800">Anthony Aaron</h3>
              <p className="text-md text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Wide range of products tailored to your needs</li>
          <li>Customer-centric approach</li>
          <li>Top-tier quality and affordable prices</li>
          <li>Fast and reliable delivery service</li>
        </ul>
      </div>

      <div className="text-center mt-10">
        <p className="text-lg text-gray-600">
          Thank you for choosing our company. We are here to serve you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
