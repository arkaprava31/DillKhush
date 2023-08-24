import React from "react";
import "./Business.css";
const Business = () => {
  return (
    <div className="businessContainer">
      <div className="businesstop">
        <div className="businessform">
          <div className="businessheading">
            <span className="headspan1">Contact Us</span>
            <span className="headspan2">AND GROW YOUR BUSINESS</span>
          </div>
          <div className="businesspara">
            <div className="div1">
              <input type="text" placeholder="Name" className="inputs" />
              <input type="text" placeholder="Email" className="inputs" />
            </div>
            <div className="div2">
              <input
                type="text"
                placeholder="Please select"
                className="inputs"
              />
              <input
                type="text"
                placeholder="4:00 pm available"
                className="inputs"
              />
            </div>
            <div className="div3">
                <textarea placeholder="Message" className="textarea"></textarea>
            </div>
            <div className="div4">
            <button className="businessbutton">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="businessbottom">
        <div className="businessbottommain">
        <div className="businessbottomleft">
        <span className="busibottoms1">Consulting Agency For Your Business</span>
        <span className="busibottoms2">the quick fox jumps over the lazy dog</span>
        </div>
        <div className="businessbottomright">
        <button className="busibutton">Contact Us</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
