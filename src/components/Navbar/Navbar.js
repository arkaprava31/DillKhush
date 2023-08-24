import React, { useState } from "react";
import "./Navbar.css";
import { BsFillHddStackFill } from "react-icons/bs";
import { logo } from "../../assets";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="nav-sticky">
      <nav className="navbar">
        <div className="container">
          

          <div className="logo">
            <img src={logo} alt="logo" className="logN" />
            <div className="logospan">The Bengal Studio</div>
          </div>


          <div className="menu-icon" onClick={handleShowNavbar}>
            <BsFillHddStackFill />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="hov pot">
                <a href="#">Home</a>
              </li>
              <li className="hov pot">
                <a href="#">Blog</a>
              </li>
              <li className="hov pot">
                <a href="#"> Career</a>               
              </li>
              <li className="hov pot">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
