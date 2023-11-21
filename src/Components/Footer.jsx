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

        <div className=" bg-blue-900 text-white rounded-sm p-4">
          <h2 className=" text-lg font-semibold mb-5"> Subscribe </h2>

          <div>

            <div className="relative bg-red-400">

              <input
                className="p-3 outline-none rounded-md my-2 text-blue-950"
                type="text"
                placeholder="Email Address"
              ></input>
              
                <FaArrowRight className="w-7 absolute left-0 text-orange-500 h-7 " />
             
            </div>
            {/* <button className="bg-orange-500 absolute p-3">
                <FaArrowRight className="w-7  h-7 " />
              </button> */}
            <p className=" text-sm w-56">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
