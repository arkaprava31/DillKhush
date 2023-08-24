import React from "react";
import "./Choice.css";
import { award, carbon, clarity } from "../../assets";
const Choose = () => {
  return (
    <div className="chooseContainer">
      <div className="chooseheading">
        <div className="chooseheadingg">
          <div className="chooseheadingmain">
            <span className="chooseheadingspan">WHY CHOOSE US</span>
          </div>
          <div className="chooseheadingpara">
            <p className="choosepara">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="choosecards">
        <div className="choosecard">
          <div className="choosecardh">
            <div className="choosecardhimg">
              <img src={clarity} alt="img" className="choosecardhimgg" />
            </div>
            <div className="choosecardhspan">
              <span className="choosecardhs">Web Development</span>
            </div>
          </div>
          <div className="choosecardp">
            <div className="choosecardpp">
              <span className="choosecardps">
                - The best products start with Figma
              </span>
              <span className="choosecardps">- Design with real data</span>
              <span className="choosecardps">- Lightning fast prototyping</span>
              <span className="choosecardps">- Lightning fast prototyping</span>
              <span className="choosecardps">
                - Work at the speed of thought.
              </span>
              <span className="choosecardpss">Learn More</span>
            </div>
          </div>
        </div>
        <div className="choosecard">
        <div className="choosecardh">
            <div className="choosecardhimg">
              <img src={award} alt="img" className="choosecardhimgg" />
            </div>
            <div className="choosecardhspan">
              <span className="choosecardhs">App Development</span>
            </div>
          </div>
          <div className="choosecardp">
            <div className="choosecardpp">
              <span className="choosecardps">
                - The best products start with Figma
              </span>
              <span className="choosecardps">- Design with real data</span>
              <span className="choosecardps">- Lightning fast prototyping</span>
              <span className="choosecardps">- Lightning fast prototyping</span>
              <span className="choosecardps">
                - Work at the speed of thought.
              </span>
              <span className="choosecardpss">Learn More</span>
            </div>
          </div>
        </div>
        <div className="choosecard">
        <div className="choosecardh">
            <div className="choosecardhimg">
              <img src={carbon} alt="img" className="choosecardhimgg" />
            </div>
            <div className="choosecardhspan">
              <span className="choosecardhs">Digital Marketting</span>
            </div>
          </div>
          <div className="choosecardp">
            <div className="choosecardpp">
              <span className="choosecardps">
                - The best products start with Figma
              </span>
              <span className="choosecardps">- Design with real data</span>
              <span className="choosecardps">- Lightning fast prototyping</span>
              <span className="choosecardps">- Lightning fast prototyping</span>
              <span className="choosecardps">
                - Work at the speed of thought.
              </span>
              <span className="choosecardpss">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
