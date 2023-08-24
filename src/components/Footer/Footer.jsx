import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <span className="footerLogo">TBS</span>
        <p className="footerPara">Think Simple Build Unique</p>
      </div>
      <div className="footerMiddle">
        <div className="aboutus">
          <span
            style={{
              color: "#FFF",
              fontFamily: "Orbitron",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              paddingLeft: "35px",
            }}
          >
            About Us
          </span>
          <ul className="ul">
            <li className="li">
              <a href="#">About TBS</a>
            </li>
            <li className="li">
              <a href="#">Contact us</a>
            </li>
            <li className="li">
              <a href="#">FAQ</a>
            </li>
            <li className="li">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="li">
              <a href="#">Terms Of Services</a>
            </li>
          </ul>
        </div>
        <div className="services">
          <span
            style={{
              color: "#FFF",
              fontFamily: "Orbitron",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              paddingLeft: "35px",
            }}
          >
            Services
          </span>
          <ul className="ul">
            <li className="li">
              <a href="#">NFT Marketplace</a>
            </li>
            <li className="li">
              <a href="#">Virtual Content</a>
            </li>
            <li className="li">
              <a href="#">Gaming</a>
            </li>
            <li className="li">
              <a href="#">Artwork</a>
            </li>
            <li className="li">
              <a href="#">Online Travel</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerContact">
        <div className="footerHeading">
          <span
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Orbitron",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Contact
          </span>
        </div>
        <div className="footerIcons">
          <div className="icon">
            <a href="#">
              {" "}
              <BsLinkedin className="iconn" />
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <BsTwitter className="iconn" />
            </a>
          </div>
          <div className="icon">
            <a href="#">
              {" "}
              <BsInstagram className="iconn" />
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <BsFacebook className="iconn" />
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <BsYoutube className="iconn" />
            </a>
          </div>
        </div>
        <div className="footerPara">
          <p
            style={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              width: "263px",
            }}
          >
            2023 © thebengalstudio.com All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
