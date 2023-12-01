import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" h-[75vh] p-8 px-32 py-24 bg-blue-950">
      <div className=" flex justify-between">
        <div className="text-white">
          <h2 className=" text-lg font-semibold mb-5"> Products </h2>
          <div>
            <ul>
              <li>
                <a href="">Employeee Database</a>
              </li>

              <li>
                <a href="#">Payroll</a>
              </li>

              <li>
                <a href="#">Absences </a>
              </li>
              <li>
                <a href="#"> Time tracking</a>
              </li>
              <li>
                <a href="#">Recruiting</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white">
          <h2 className=" text-lg font-semibold mb-5"> Information </h2>
          <div>
            <ul>
              <li>
                <a href="">Employeee Database</a>
              </li>

              <li>
                <a href="#">Payroll</a>
              </li>

              <li>
                <a href="#">Absences </a>
              </li>
              <li>
                <a href="#"> Time tracking</a>
              </li>
              <li>
                <a href="#">Recruiting</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white">
          <h2 className=" text-lg font-semibold mb-5"> Company </h2>
          <div>
            <ul>
              <li>
                <a href="">Employeee Database</a>
              </li>

              <li>
                <a href="#">Payroll</a>
              </li>

              <li>
                <a href="#">Absences </a>
              </li>
              <li>
                <a href="#"> Time tracking</a>
              </li>
              <li>
                <a href="#">Recruiting</a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" bg-blue-900 text-white rounded-md p-4">
          <h2 className=" text-lg font-semibold mb-5"> Subscribe </h2>

          <div>
            <div className="relative flex ">
              <div className="relative rounded-md overflow-hidden  items-center flex">
                <input
                  className="p-3 outline-none  rounded-md  text-blue-950"
                  type="text"
                  placeholder="Email Address"
                />

                <button className="bg-orange-500 right-0 absolute py-6 px-3 rounded-r-md">
                  <FaArrowRight className="w-7 h-7   text-white" />
                </button>
              </div>
            </div>

            <p className=" text-sm w-56">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-400 mt-8 border-t-2 border-blue-100"></div>
    </div>
  );
};

export default Footer;
