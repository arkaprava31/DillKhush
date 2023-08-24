import React from "react";
import "./Whatistbs.css";
import {  abt } from "../../assets";
const Whatistbs = () => {
  return (
    <div className="whatistbsContainer">
      <div className="lefttbs">
          <img src={abt} alt="about" className="aboutimg" />
      </div>
      <div className="righttbs">
        <div className="righttbsheading">
            <span className="witspan">What is <span className="tbsspann">TBS</span></span>
        </div>
        <div className="tbspara">
          <p>
            The Bengal Studio is a software development company specializing in
            App development for the society which is available in Play Store.
            With a team of highly skilled developers and engineers, we also
            deliver custom software solutions tailored to meet our client's
            unique needs. From web and mobile applications to enterprise
            software, we combine innovation, quality, and reliability to empower
            businesses with advanced digital solutions — partner with us to
            transform your ideas into robust software solutions that drive
            growth and success.
          </p>
        </div>
        <div className="tbsbuttondiv">
          <button className="tbsbutton1">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Whatistbs;
