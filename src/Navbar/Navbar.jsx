import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useOurContext } from "../Context/MyContext";
import Logo12 from "../Assets/logo1.png";

const Navbar = () => {
  const { HandleShoppingCartClick, mytotalItems } = useOurContext();
  const { cartItems } = useOurContext();

  return (
    <div className="bg-green-600 h-24 p-4 px-14 pt-6 fixed w-full top-0 z-20">
      <nav className="flex gap-36 justify-between items-center">
        <div>
          <img className="h-16" src={Logo12} alt="logo" />
        </div>

        <div className="flex bg-white rounded-md outline outline-2 text-blue-500 outline-blue-300 items-center">
          <AiOutlineSearch className="ml-4 w-6 h-6" />
          <input
            className="py-3 p-3 rounded-md px-6 outline-none"
            placeholder="Search something"
            type="text"
          ></input>
        </div>

        <div className="flex">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold border-b-2 pb-2 border-blue-500"
                    : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold border-b-2 pb-2 border-blue-500"
                    : "text-gray-700"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/OurProducts"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold border-b-2 pb-2 border-blue-500"
                    : "text-gray-700"
                }
              >
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Wishlist"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold border-b-2 pb-2 border-blue-500"
                    : "text-gray-700"
                }
              >
                WishList
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="relative">
          <label className="bg-orange-500 absolute -top-3 left-6 rounded-full w-6 text-white text-center font-normal text-l">
            {mytotalItems < 1 ? cartItems.length : mytotalItems}
          </label>
          <AiOutlineShoppingCart
            onClick={HandleShoppingCartClick}
            className="w-8 hover:cursor-pointer h-8"
          />
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
