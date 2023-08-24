import React from "react";
import "./About.css";
// import { Vector, abt } from "../../assets";
const About = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <div className="aboutContainer">
      <div className="leftdiv">
        <div className="heading">
          <span className="headingspan">
            Explore The Future With The <span className="tbs">TBS</span>
          </span>
        </div>
        <div className="para">Think Simple Build Unique</div>
        <div className="buttondiv">
          <div className="buttondiv1">
          <button className="buttonabout1">Get Started</button>
          <button className="buttonabout2">Explore Now</button>
          </div>
        </div>
      </div>
      <div className="rightdiv">
        <div style={{ display: "flex" }}>
          {/* <img src={Vector} alt="vector" className="vectorimg" />
          <img src={abt} alt="about" className="aboutimg" /> */}
          <div className="aboutform">
          <form onSubmit={handleSubmit}> 
            <div className="formheading">
              <h3 className="headingh3">Reach Us</h3>
            </div>
            <div className="formoptions">
              <div className="formoption">
                <label
                  style={{
                    marginBottom: "1vh",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0.2px",
                  }}
                  htmlFor="fname"
                >
                  Name
                </label>
                <input type="text" placeholder="Enter your name"
                style={{
                    display: "flex",
                    height:"8px",
                    padding:"20px",
                    alignItems:"center",
                    flexShrink:"0",
                    borderRadius:"5px",
                    border:"1px solid var(--muted-color, #BDBDBD)",
                    background: "#F9F9F9",
                  }}
                 />
              </div>
              <div className="formoption">
                <label
                style={{
                    marginBottom: "1vh",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0.2px",
                  }}
                  htmlFor="email"
                >Email</label>
                <input type="email" placeholder="Enter your email" 
                  style={{
                    display: "flex",
                    height:"8px",
                    padding:"20px",
                    alignItems:"center",
                    flexShrink:"0",
                    borderRadius:"5px",
                    border:"1px solid var(--muted-color, #BDBDBD)",
                    background: "#F9F9F9",
                  }}
                />
              </div>
              <div className="formoption">
                <label
                style={{
                    marginBottom: "1vh",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0.2px",
                  }}
                  htmlFor="mobile"
                >Mobile No.</label>
                <input type="text" placeholder="Enter your mobile number"
                style={{
                    display: "flex",
                    height:"8px",
                    padding:"20px",
                    alignItems:"center",
                    flexShrink:"0",
                    borderRadius:"5px",
                    border:"1px solid var(--muted-color, #BDBDBD)",
                    background: "#F9F9F9",
                  }}
                 />
              </div>
            </div>
            <div className="formbutton">
              <button className="buttonform" type="submit">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
