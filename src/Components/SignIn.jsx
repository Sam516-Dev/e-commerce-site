import React from "react";
// import "./Navbar.css";
function Navbar() {
  return (
      <div className="navbar-container">

        <ul className="navbarleft">

          <li className=" dropdown">
            <a className="mylink" href="#">
              Men
            </a>
            <ul>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Trousers</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
            </ul>
          </li>
          
          <li>
            <a className="mylink" href="#">
              Women
            </a>
            <ul>
              <li>
                <a href="#">Dresses</a>
              </li>
              <li>
                <a href="#">skirts</a>
              </li>
              <li>
                <a href="#">Blouses</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="mylink" href="#">
              Gifts
            </a>
            <ul>
              <li>
                <a href="#">jewelry</a>
              </li>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">watches</a>
              </li>
            </ul>
          </li>
          </ul>

        <ul className="navbarright">
          <li>
            <a href="#">SEARCH</a>
          </li>
          <li>
            <a href="#">SIGN IN</a>
          </li>
          <li>
            <a href="#">BAG</a>
          </li>
        </ul>

      </div>
  );
 }
 export default Navbar;